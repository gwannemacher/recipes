package com.gracula.recipes.graphql;

import com.google.common.collect.ImmutableList;
import com.gracula.recipes.data.MongoDbClient;
import com.gracula.recipes.models.Recipe;
import graphql.schema.DataFetcher;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static com.mongodb.client.model.Filters.eq;

@Component
public class GraphQLDataFetchers {
    private final MongoDbClient mongoClient;

    public GraphQLDataFetchers(MongoDbClient client) {
        mongoClient = client;
    }

    private String generateIdFromName(final String name) {
        final String lowercase = name.toLowerCase(Locale.ROOT);
        return lowercase.replaceAll("\\s+", "-");
    }

    private List<String> stringToList(final String rawString) {
        return Arrays.asList(rawString.split(System.lineSeparator()));
    }

    public DataFetcher<Recipe> addRecipe() {
        return env -> {
            final Recipe recipe = new Recipe();

            final String name = env.getArgument("name");
            recipe.setName(name);

            final String id = generateIdFromName(name);
            recipe.setId(id);

            recipe.setCategory(env.getArgument("category"));

            final List<String> ingredients = stringToList(env.getArgument("ingredients"));
            recipe.setIngredients(ingredients);

            final List<String> instructions = stringToList(env.getArgument("instructions"));
            recipe.setInstructions(instructions);

            mongoClient.recipeCollection.insertOne(recipe);

            return recipe;
        };
    }

    private List<Recipe> getRecipesFromDb() {
        return StreamSupport.stream(mongoClient.recipeCollection.find().spliterator(), false)
                .collect(Collectors.toList());
    }

    public DataFetcher getRecipesDataFetcher() {
        return dataFetchingEnvironment -> getRecipesFromDb();
    }
}

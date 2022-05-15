package com.gracula.recipes.graphql;

import com.gracula.recipes.data.MongoDbClient;
import com.gracula.recipes.models.Recipe;
import com.mongodb.client.model.Updates;
import graphql.schema.DataFetcher;
import org.bson.conversions.Bson;
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

    public DataFetcher<Recipe> updateRecipe() {
        return env -> {
            final String id = env.getArgument("id");
            final List<String> ingredients = stringToList(env.getArgument("ingredients"));
            final List<String> instructions = stringToList(env.getArgument("instructions"));

            final Bson updates = Updates.combine(
                    Updates.set("name", env.getArgument("name")),
                    Updates.set("category", env.getArgument("category")),
                    Updates.set("ingredients", ingredients),
                    Updates.set("instructions", instructions)
            );

            mongoClient.recipeCollection.findOneAndUpdate(eq("_id", id), updates);
            Recipe recipe = mongoClient.recipeCollection.find(
                    eq("_id", id)).first();

            return recipe;
        };
    }

    public DataFetcher<String> deleteRecipe() {
        return env -> {
            final String id = env.getArgument("id");
            mongoClient.recipeCollection.deleteOne(eq("_id", id));
            return id;
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

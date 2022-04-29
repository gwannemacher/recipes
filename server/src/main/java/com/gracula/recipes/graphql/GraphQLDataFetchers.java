package com.gracula.recipes.graphql;

import com.google.common.collect.ImmutableList;
import com.gracula.recipes.data.MongoDbClient;
import com.gracula.recipes.models.Recipe;
import graphql.schema.DataFetcher;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static com.mongodb.client.model.Filters.eq;

@Component
public class GraphQLDataFetchers {
    private final MongoDbClient mongoClient;

    public GraphQLDataFetchers(MongoDbClient client) {
        mongoClient = client;
    }

//    private List<Recipe> getRecipesFromDb() {
//        return StreamSupport.stream(mongoClient.recipeCollection.find().spliterator(), false)
//                .collect(Collectors.toList());
//    }

    private List<Recipe> getRecipesFromDb() {
        Recipe recipe = new Recipe();
        recipe.setId("porridge");
        recipe.setTitle("Porridge");
        recipe.setCategory("BREAKFAST");
        recipe.setIngredients(ImmutableList.of(
            "⅔ cup steel cut oats",
            "⅔ cup unsweetened almond milk",
            "2 tablespoons raw pepitas, roughly chopped",
            "pinch ground ginger",
            "pinch ground cinnamon",
            "pinch ground nutmeg",
            "2 tablespoons hemp seeds",
            "1 tablespoons almond butter",
            "2 teaspoons chia seeds",
            "½ teaspoon vanilla extract"));
        recipe.setInstructions(ImmutableList.of(
            "Bring the oats and ⅔ cup water to a boil in a medium saucepan over medium high heat",
            "Reduce the heat to low and stir in the almond milk, pepitas, ginger, cinnamon, and nutmeg",
            "Cook, stirring occasionally, for about 10 minutes, until the oats are tender",
            "Remove from heat and stir in the hemp seeds, almond butter, chia seeds, and vanilla",
            "Taste, adding your choice of sweetener as desired for a sweeter porridge"));

        return ImmutableList.of(recipe);
    }

    public DataFetcher getRecipesDataFetcher() {
        return dataFetchingEnvironment -> getRecipesFromDb();
    }
}

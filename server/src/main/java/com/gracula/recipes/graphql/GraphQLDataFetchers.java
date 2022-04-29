package com.gracula.recipes.graphql;

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

    private List<Recipe> getRecipesFromDb() {
        return StreamSupport.stream(mongoClient.recipeCollection.find().spliterator(), false)
                .collect(Collectors.toList());
    }

    public DataFetcher getRecipesDataFetcher() {
        return dataFetchingEnvironment -> getRecipesFromDb();
    }
}

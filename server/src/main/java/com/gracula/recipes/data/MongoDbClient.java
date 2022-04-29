package com.gracula.recipes.data;

import com.gracula.recipes.models.Recipe;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.codecs.configuration.CodecProvider;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

import static com.mongodb.MongoClientSettings.getDefaultCodecRegistry;
import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

@Component
@PropertySource("classpath:application.properties")
public class MongoDbClient {
    public final MongoCollection<Recipe> recipeCollection;

    public MongoDbClient() {

        final String mongoDbUrl = String.format(
                "mongodb+srv://%s:%s@%s.%s.mongodb.net/%s?retryWrites=true&w=majority",
                System.getenv("MONGO_USERNAME"),
                System.getenv("MONGO_PASSWORD"),
                System.getenv("MONGO_CLUSTER_NAME"),
                System.getenv("MONGO_CLUSTER_THINGY"),
                System.getenv("MONGO_DB_NAME_THINGY"));

        final CodecProvider pojoCodecProvider = PojoCodecProvider.builder().automatic(true).build();
        final CodecRegistry pojoCodecRegistry = fromRegistries(
                getDefaultCodecRegistry(), fromProviders(pojoCodecProvider));

        final MongoClient mongoClient = MongoClients.create(mongoDbUrl);
        final MongoDatabase database = mongoClient
                .getDatabase(System.getenv("MONGO_DB_NAME"))
                .withCodecRegistry(pojoCodecRegistry);

        recipeCollection = database.getCollection("recipes", Recipe.class);
    }
}

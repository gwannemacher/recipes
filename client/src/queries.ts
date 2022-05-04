import { gql } from '@apollo/client';

export const RECIPES_QUERY = gql`
    {
        getRecipes {
            id
            name
            category
            ingredients
            instructions
        }
    }
`;

export const ADD_RECIPE_MUTATION = gql`
    mutation AddRecipe(
        $name: String!
        $category: String!
        $ingredients: String!
        $instructions: String!
    ) {
        addRecipe(
            name: $name
            category: $category
            ingredients: $ingredients
            instructions: $instructions
        ) {
            id
            name
            category
            ingredients
            instructions
        }
    }
`;

export const UPDATE_RECIPE_MUTATION = gql`
    mutation UpdateRecipe(
        $id: String!
        $name: String!
        $category: String!
        $ingredients: String!
        $instructions: String!
    ) {
        updateRecipe(
            id: $id
            name: $name
            category: $category
            ingredients: $ingredients
            instructions: $instructions
        ) {
            id
            name
            category
            ingredients
            instructions
        }
    }
`;

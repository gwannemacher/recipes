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

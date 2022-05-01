import { gql } from '@apollo/client';

export const RECIPES_QUERY = gql`
    {
        getRecipes {
            id
            title
            category
            ingredients
            instructions
        }
    }
`;

import { useMutation } from '@apollo/client';
import { ADD_RECIPE_MUTATION } from '../queries.ts';

const useAddRecipe = () => {
    return useMutation(ADD_RECIPE_MUTATION);
};

export default useAddRecipe;

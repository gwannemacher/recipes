import { useMutation } from '@apollo/client';
import { UPDATE_RECIPE_MUTATION } from '../queries.ts';

const useUpdateRecipe = () => {
    return useMutation(UPDATE_RECIPE_MUTATION);
};

export default useUpdateRecipe;

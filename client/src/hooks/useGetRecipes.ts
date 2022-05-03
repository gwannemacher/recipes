import { useQuery } from '@apollo/client';
import { RECIPES_QUERY } from '../queries.ts';

const useGetRecipes = () => {
    const { loading, data } = useQuery(RECIPES_QUERY);
    return [loading, data?.getRecipes];
};

export default useGetRecipes;

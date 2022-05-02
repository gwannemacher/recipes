import { useQuery, useApolloClient } from '@apollo/client';
import { RECIPES_QUERY } from '../queries.ts';

const useGetRecipes = () => {
    const client = useApolloClient();
    const { loading, data } = useQuery(RECIPES_QUERY);
    return [loading, data?.getRecipes];
};

export default useGetRecipes;

import React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import RecipeLink from './RecipeLink.tsx';
import Recipes from '../models/recipes.ts';
import useGetRecipes from '../hooks/useGetRecipes.ts';

const RecipeGroup = (props) => {
    const [loading, allRecipes] = useGetRecipes();
    const recipes = allRecipes?.filter((x) => x.category === props.category);

    return (
        <Stack spacing={1} sx={{ paddingBottom: '10px' }} key={props.category}>
            <Box sx={{ fontSize: '1.75em', textTransform: 'lowercase' }}>
                {props.category}
            </Box>
            {recipes?.map((x) => (
                <RecipeLink key={x.id} recipeId={x.id} name={x.name} />
            ))}
        </Stack>
    );
};

export default RecipeGroup;

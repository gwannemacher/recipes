import React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import RecipeLink from './RecipeLink.tsx';
import Recipes from './models/recipes.ts';

const RecipeGroup = (props) => {
    const recipes = Recipes.filter((x) => x.category === props.category);

    return (
        <Stack spacing={1} sx={{}} key={props.category}>
            <Box sx={{ fontSize: '1.5em', textTransform: 'lowercase' }}>
                {props.category}
            </Box>
            {recipes.map((x) => (
                <RecipeLink key={x.id} recipeId={x.id} />
            ))}
        </Stack>
    );
};

export default RecipeGroup;

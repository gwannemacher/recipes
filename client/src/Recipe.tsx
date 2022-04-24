import React from 'react';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

import Recipes from './models/recipes.ts';

const Recipe = (props) => {
    const params = useParams();
    const filtered = Recipes.filter((x) => x.id === params.recipeId);
    const recipe = filtered.length > 0 ? filtered[0] : {};

    const Ingredients = () => {
        return (
            <Box sx={{ marginTop: '20px' }}>
                <Box
                    sx={{
                        fontSize: '1.3em',
                        paddingBottom: '10px',
                        paddingTop: '5px',
                    }}
                >
                    ingredients
                </Box>
                {recipe.ingredients?.map((x) => (
                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                        <Checkbox />
                        {x}
                    </Stack>
                ))}
            </Box>
        );
    };

    const Instructions = () => {
        return (
            <Box sx={{ marginTop: '15px' }}>
                <Box
                    sx={{
                        fontSize: '1.3em',
                        paddingBottom: '10px',
                        paddingTop: '5px',
                    }}
                >
                    instructions
                </Box>
                {recipe.instructions?.map((x) => (
                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                        <Checkbox />
                        {x}
                    </Stack>
                ))}
            </Box>
        );
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
            }}
        >
            <Stack sx={{ width: '750px' }}>
                <Box sx={{ fontSize: '2em' }}>{recipe.name}</Box>
                <Ingredients />
                <Instructions />
            </Stack>
        </Box>
    );
};

export default Recipe;

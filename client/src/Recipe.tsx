import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

import Recipes from './models/recipes.ts';

const RecipeCheckbox = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Box
            onClick={() => setChecked(!checked)}
            sx={{
                color: checked ? 'gray' : 'unset',
                fontStyle: checked ? 'italic' : 'unset',
                '&:hover': {
                    cursor: 'pointer',
                },
            }}
        >
            <Checkbox checked={checked} onChange={handleChange} />
            {props.label}
        </Box>
    );
};

const Recipe = (props) => {
    const params = useParams();
    const filtered = Recipes.filter((x) => x.id === params.recipeId);
    const recipe = filtered.length > 0 ? filtered[0] : {};

    const Ingredients = () => {
        return (
            <Box sx={{ marginTop: '20px' }}>
                <Box
                    sx={{
                        fontSize: '1.5em',
                        paddingBottom: '10px',
                        paddingTop: '5px',
                    }}
                >
                    ingredients
                </Box>
                {recipe.ingredients?.map((x) => (
                    <Stack
                        key={x}
                        direction="row"
                        sx={{ alignItems: 'center' }}
                    >
                        <RecipeCheckbox label={x} />
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
                        fontSize: '1.5em',
                        paddingBottom: '10px',
                        paddingTop: '5px',
                    }}
                >
                    instructions
                </Box>
                {recipe.instructions?.map((x) => (
                    <Stack
                        key={x}
                        direction="row"
                        sx={{ alignItems: 'center' }}
                    >
                        <RecipeCheckbox label={x} />
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
                marginTop: '75px',
            }}
        >
            <Stack sx={{ width: '750px' }}>
                <Box
                    sx={{
                        fontSize: '2.5em',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {recipe.name}
                </Box>
                <Ingredients />
                <Instructions />
            </Stack>
        </Box>
    );
};

export default Recipe;

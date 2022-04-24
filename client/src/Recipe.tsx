import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import Recipes from './models/recipes.ts';

const RecipeCheckbox = (props) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Box sx={{ display: 'inline-block', width: '100%' }}>
            <Stack
                direction="row"
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {props.label}
                </Box>
            </Stack>
        </Box>
    );
};

const Ingredients = (props) => {
    return (
        <Box sx={{ marginTop: '50px' }}>
            <Box
                sx={{
                    fontSize: '1.5em',
                    paddingBottom: '10px',
                    paddingTop: '5px',
                }}
            >
                ingredients
            </Box>
            <Box sx={{ columnCount: 2 }}>
                {props.ingredients?.map((i) => (
                    <RecipeCheckbox key={i} label={i} />
                ))}
            </Box>
        </Box>
    );
};

const Instructions = (props) => {
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
            {props.instructions?.map((i) => (
                <Box
                    sx={{
                        paddingTop: i.length > 100 ? '5px' : 'unset',
                        paddingBottom: i.length > 100 ? '5px' : 'unset',
                    }}
                >
                    <RecipeCheckbox key={i} label={i} />
                </Box>
            ))}
        </Box>
    );
};

const GoHomeButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate('/')}
            variant="text"
            sx={{
                textTransform: 'lowercase',
                padding: '5px',
                justifyContent: 'start',
                fontSize: 'unset',
                lineHeight: 'unset',
                '&.MuiButtonBase-root.MuiButton-root': {
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'MediumPurple',
                    },
                },
            }}
        >
            go home
        </Button>
    );
};

const RecipeName = (props) => {
    return (
        <Box
            sx={{
                fontSize: '2.5em',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {props.recipeName}
        </Box>
    );
};

const Recipe = (props) => {
    const params = useParams();
    const filtered = Recipes.filter((x) => x.id === params.recipeId);
    const recipe = filtered.length > 0 ? filtered[0] : {};

    return (
        <>
            <GoHomeButton />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '75px',
                    textTransform: 'lowercase',
                }}
            >
                <Stack sx={{ width: '750px', paddingBottom: '100px' }}>
                    <RecipeName recipeName={recipe.name} />
                    <Ingredients ingredients={recipe.ingredients} />
                    <Instructions instructions={recipe.instructions} />
                </Stack>
            </Box>
        </>
    );
};

export default Recipe;

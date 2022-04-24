import React from 'react';
import { useNavigate } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RecipeLink from './RecipeLink.tsx';
import Recipes, { Category } from './models/recipes.ts';

const RecipeGroup = (props) => {
    const recipes = Recipes.filter(x => x.category === props.category);

    return (
        <Stack spacing={1} sx={{}}>
            <Box sx={{ fontSize: '1.5em', textTransform: 'lowercase' }}>{props.category}</Box>
            {recipes.map(x => <RecipeLink recipeId={x.id} /> )}
        </Stack>
    );
};

const ColumnOne = (props) => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <RecipeGroup category={Category.BREKKIE} />
        </Stack>
    );
};

const ColumnTwo = (props) => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <RecipeGroup category={Category.SOUP} />
        </Stack>
    );
};

const ColumnThree = (props) => {
    return (
        <Stack spacing={1} sx={{}}>
            <RecipeGroup category={Category.PASTA} />
            <RecipeGroup category={Category.OTHER} />
        </Stack>
    );
};

const Home = () => {
    return (
        <Stack
            spacing={2}
            sx={{ textAlign: 'center', marginTop: '75px' }}
        >
            <Box sx={{ fontSize: '3em' }}>recipes</Box>
            <Stack
                sx={{
                    paddingTop: '20px',
                    justifyContent: 'center',
                    textAlign: 'left',
                }}
                direction="row"
            >
                <ColumnOne />
                <ColumnTwo />
                <ColumnThree />
            </Stack>
        </Stack>
    );
};

export default Home;

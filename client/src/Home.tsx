import React from 'react';
import { useNavigate } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RecipeLink from './RecipeLink.tsx';
import Recipes, { Category } from './models/recipes.ts';

const Brekkie = (props) => {
    const breakfastRecipes = Recipes.filter(x => x.category === Category.BREKKIE);

    return (
        <Stack spacing={1} sx={{}}>
            <Box sx={{ fontSize: '1.5em' }}>brekkie</Box>
            {breakfastRecipes.map(x => <RecipeLink recipeId={x.id} /> )}
        </Stack>
    );
};

const Soups = () => {
    const soupRecipes = Recipes.filter(x => x.category === Category.SOUP);

    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>soups</Box>
            {soupRecipes.map(x => <RecipeLink recipeId={x.id} /> )}
        </Stack>
    );
};

const Pasta = () => {
    const pastaRecipes = Recipes.filter(x => x.category === Category.PASTA);

    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>pasta</Box>
            {pastaRecipes.map(x => <RecipeLink recipeId={x.id} /> )}
        </Stack>
    );
};

const Other = () => {
    const otherRecipes = Recipes.filter(x => x.category === Category.OTHER);

    return (
        <Stack spacing={1} sx={{ paddingTop: '10px' }}>
            <Box sx={{ fontSize: '1.5em' }}>other</Box>
            {otherRecipes.map(x => <RecipeLink recipeId={x.id} /> )}
        </Stack>
    );
};

const ColumnOne = (props) => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <Brekkie />
        </Stack>
    );
};

const ColumnTwo = (props) => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <Soups />
        </Stack>
    );
};

const ColumnThree = (props) => {
    return (
        <Stack spacing={1} sx={{}}>
            <Pasta />
            <Other />
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

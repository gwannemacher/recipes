import React from 'react';
import { useNavigate } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RecipeLink from './RecipeLink.tsx';

const Brekkie = (props) => {
    return (
        <Stack spacing={1} sx={{}}>
            <Box sx={{ fontSize: '1.5em' }}>brekkie</Box>
            <RecipeLink recipeId={'porridge'} />
        </Stack>
    );
};

const Soups = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>soups</Box>
            <RecipeLink recipeId={'veggie-broth'} />
            <RecipeLink recipeId={'veggie-soup'} />
            <RecipeLink recipeId={'chicken-tortilla'} />
            <RecipeLink recipeId={'lentil-soup'} />
        </Stack>
    );
};

const Pasta = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>pasta</Box>
            <RecipeLink recipeId={'mushroom-risotto'} />
        </Stack>
    );
};

const Other = () => {
    return (
        <Stack spacing={1} sx={{ paddingTop: '10px' }}>
            <Box sx={{ fontSize: '1.5em' }}>other</Box>
            <RecipeLink recipeId={'stuffed-cabbage-rolls'} />
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

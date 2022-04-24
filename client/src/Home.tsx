import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import Recipes, { Category } from './models/recipes.ts';
import Recipe from './Recipe.tsx';

const Brekkie = (props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/porridge');
    };

    return (
        <Stack spacing={1} sx={{}}>
            <Box sx={{ fontSize: '1.5em' }}>brekkie</Box>
            <Box>
                <Button
                    onClick={onClick}
                    variant="text"
                    sx={{
                        textTransform: 'lowercase',
                        padding: '0px',
                        justifyContent: 'start',
                        '&.MuiButtonBase-root.MuiButton-root': {
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'MediumPurple'
                            },
                        },
                    }}
                >
                    porridge
                </Button>
            </Box>
        </Stack>
    );
};

const Soups = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>soups</Box>
            <Box>veggie broth</Box>
            <Box>veggie soup</Box>
            <Box>chicken tortilla</Box>
            <Box>lentil soup</Box>
        </Stack>
    );
};

const Pasta = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{ fontSize: '1.5em' }}>pasta</Box>
            <Box>mushroom risotto</Box>
        </Stack>
    );
};

const Other = () => {
    return (
        <Stack spacing={1} sx={{ paddingTop: '10px' }}>
            <Box sx={{ fontSize: '1.5em' }}>other</Box>
            <Box>stuffed cabbage rolls</Box>
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

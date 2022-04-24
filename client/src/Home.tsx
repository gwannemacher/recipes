import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import Recipes, { Category } from './models/recipes.ts';

const Brekkie = (props) => {
    return (
        <Stack spacing={1} sx={{}}>
            <Box sx={{ fontSize: '1.5em' }}>brekkie</Box>
            <Box>
                <Button
                    onClick={() => props.setRecipe('porridge')}
                    variant="text"
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
            <Brekkie setRecipe={props.setRecipe} />
        </Stack>
    );
};

const ColumnTwo = (props) => {
    return (
        <Stack spacing={1} sx={{ marginRight: '50px' }}>
            <Soups setRecipe={props.setRecipe} />
        </Stack>
    );
};

const ColumnThree = (props) => {
    return (
        <Stack spacing={1} sx={{}}>
            <Pasta setRecipe={props.setRecipe} />
            <Other setRecipe={props.setRecipe} />
        </Stack>
    );
};

const Recipe = (props) => {
    const filtered = Recipes.filter((x) => x.name === props.recipe);
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
                {recipe.ingredients.map((x) => (
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
                {recipe.instructions.map((x) => (
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

const Home = () => {
    const [recipe, setRecipe] = useState('');

    return (
        <>
            {recipe ? (
                <Recipe recipe={recipe} />
            ) : (
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
                        <ColumnOne setRecipe={setRecipe} />
                        <ColumnTwo setRecipe={setRecipe} />
                        <ColumnThree setRecipe={setRecipe} />
                    </Stack>
                </Stack>
            )}
        </>
    );
};

export default Home;

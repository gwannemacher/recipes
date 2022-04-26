import React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import RecipeGroup from './components/RecipeGroup.tsx';
import { Category } from './models/recipes.ts';

const Home = () => {
    return (
        <Stack spacing={2} sx={{ textAlign: 'center', marginTop: '75px' }}>
            <Box sx={{ fontSize: '3.5em' }}>recipes</Box>
            <Stack
                sx={{
                    paddingTop: '50px',
                    justifyContent: 'center',
                    textAlign: 'left',
                }}
                direction="row"
            >
                <Stack spacing={1} sx={{ marginRight: '60px' }}>
                    <RecipeGroup category={Category.BREAKFAST} />
                </Stack>
                <Stack spacing={1} sx={{ marginRight: '60px' }}>
                    <RecipeGroup category={Category.SOUP} />
                </Stack>
                <Stack spacing={1} sx={{}}>
                    <RecipeGroup category={Category.PASTA} />
                    <RecipeGroup category={Category.OTHER} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Home;

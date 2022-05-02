import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useQuery, useApolloClient } from '@apollo/client';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RecipeGroup from './components/RecipeGroup.tsx';
import { Category } from './models/recipes.ts';
import useIsEditMode from './hooks/useIsEditMode.ts';

const Home = () => {
    const isEditMode = useIsEditMode();
    const navigate = useNavigate();

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
            {isEditMode && (
                <Box>
                    <Button
                        sx={{ textTransform: 'lowercase', marginTop: '50px' }}
                        variant="contained"
                        onClick={() => navigate('/add-new')}
                    >
                        add new recipe
                    </Button>
                </Box>
            )}
        </Stack>
    );
};

export default Home;

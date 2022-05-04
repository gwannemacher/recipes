import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useQuery, useApolloClient } from '@apollo/client';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RecipeGroup from './components/RecipeGroup.tsx';
import { Category } from './models/recipes.ts';
import { useEditModeContext } from './EditModeContextProvider.tsx';

const Title = () => {
    const isEditMode = useEditModeContext();
    const navigate = useNavigate();

    return (
        <Box sx={{ fontSize: '3.5em' }}>
            {isEditMode ? (
                <Box>
                    recipes
                    <Button
                        sx={{
                            textTransform: 'lowercase',
                            marginLeft: '20px',
                        }}
                        variant="contained"
                        onClick={() => navigate('/form')}
                    >
                        add
                    </Button>
                </Box>
            ) : (
                'recipes'
            )}
        </Box>
    );
};

const Home = () => {
    return (
        <Stack spacing={2} sx={{ textAlign: 'center', marginTop: '75px' }}>
            <Title />
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

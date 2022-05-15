import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import RecipeGroup from './components/RecipeGroup.tsx';
import Category from './models/recipe-category.ts';
import { TitlePadding } from './layout/TitlePadding.tsx';
import { useEditModeContext } from './EditModeContextProvider.tsx';

const Title = () => {
    const isEditMode = useEditModeContext();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                fontSize: '3.5em',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
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
        <Container maxWidth="sm" sx={{ padding: '25px', flexGrow: 1 }}>
            <TitlePadding>
                <Title />
            </TitlePadding>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} sx={{ width: 'fit-content' }}>
                    <RecipeGroup category={Category.BREAKFAST} />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ width: 'fit-content' }}>
                    <RecipeGroup category={Category.SOUP} />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ width: 'fit-content' }}>
                    <RecipeGroup category={Category.PASTA} />
                    <RecipeGroup category={Category.OTHER} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;

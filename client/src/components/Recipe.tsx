import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import useGetRecipes from '../hooks/useGetRecipes.ts';
import { TitlePadding } from '../layout/TitlePadding.tsx';
import { useEditModeContext } from '../EditModeContextProvider.tsx';

const GoHomeButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate('/')}
            variant="text"
            sx={{
                textTransform: 'lowercase',
                padding: '10px',
                position: 'absolute',
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
            home
        </Button>
    );
};

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
        <Box>
            <Box
                sx={{
                    fontSize: '1.75em',
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
                    fontSize: '1.75em',
                    paddingBottom: '10px',
                    paddingTop: '5px',
                }}
            >
                instructions
            </Box>
            {props.instructions?.map((i) => (
                <Box
                    key={i}
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

const RecipeName = (props) => {
    const isEditMode = useEditModeContext();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                fontSize: '3em',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {isEditMode ? (
                <Box>
                    {props.recipeName}
                    <Button
                        sx={{
                            textTransform: 'lowercase',
                            marginLeft: '20px',
                        }}
                        variant="contained"
                        onClick={() =>
                            navigate(`/form?recipe=${props.recipeId}`)
                        }
                    >
                        edit
                    </Button>
                </Box>
            ) : (
                props.recipeName
            )}
        </Box>
    );
};

const Recipe = (props) => {
    const params = useParams();

    const [loading, allRecipes] = useGetRecipes();
    const filtered = allRecipes?.filter((x) => x.id === params.recipeId);
    const recipe = filtered?.length > 0 ? filtered[0] : {};
    const recipeName = (
        <RecipeName recipeName={recipe.name} recipeId={recipe.id} />
    );

    return (
        <>
            <GoHomeButton />
            <Container maxWidth="md" sx={{ padding: '25px', flexGrow: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        textTransform: 'lowercase',
                    }}
                >
                    <Stack sx={{ width: '750px', paddingBottom: '100px' }}>
                        <TitlePadding content={recipeName} />
                        <Ingredients ingredients={recipe.ingredients} />
                        <Instructions instructions={recipe.instructions} />
                    </Stack>
                </Box>
            </Container>
        </>
    );
};

export default Recipe;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import Recipes from './models/recipes.ts';

const RecipeLink = (props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/${props.recipeId}`);
    };

    const filteredRecipesOnId = Recipes.filter((x) => x.id === props.recipeId);
    const recipe = filteredRecipesOnId.length > 0 ? filteredRecipesOnId[0] : {};

    return (
        <Button
            onClick={onClick}
            variant="text"
            sx={{
                textTransform: 'lowercase',
                padding: '0px',
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
            {recipe.name}
        </Button>
    );
};

export default RecipeLink;

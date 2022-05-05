import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const RecipeLink = (props) => {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate(`/${props.recipeId}`)}
            variant="text"
            key={props.name}
            sx={{
                textTransform: 'lowercase',
                width: 'fit-content',
                textAlign: 'left',
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
            {props.name}
        </Button>
    );
};

export default RecipeLink;

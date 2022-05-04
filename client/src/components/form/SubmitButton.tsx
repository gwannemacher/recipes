import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from '@mui/material/Button';

const SubmitButton = (props) => {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get('recipe');

    return (
        <Button
            sx={{ marginTop: '10px', textTransform: 'lowercase' }}
            type="submit"
            variant="contained"
        >
            {recipeId ? 'Update' : 'Add'}
        </Button>
    );
};

export default SubmitButton;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AddNewRecipe = (props) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ }}>
            <Button onClick={() => navigate('/')} variant="contained">create</Button>
        </Box>
    );
};

export default AddNewRecipe;

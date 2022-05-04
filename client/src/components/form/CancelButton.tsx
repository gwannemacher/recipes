import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const CancelButton = (props) => {
    const navigate = useNavigate();

    return (
        <Button
            sx={{
                marginTop: '10px',
                marginLeft: '10px',
                textTransform: 'lowercase',
            }}
            type="button"
            onClick={() => navigate('/')}
            variant="outlined"
        >
            cancel
        </Button>
    );
};

export default CancelButton;

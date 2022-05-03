import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

const SubmitButton = (props) => {
    const { formik } = props;

    return (
        <Button
            sx={{ marginTop: '10px', textTransform: 'lowercase' }}
            type="submit"
            variant="contained"
        >
            add
        </Button>
    );
};

export default SubmitButton;

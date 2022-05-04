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

const NameField = (props) => {
    return (
        <TextField
            fullWidth
            sx={{ marginBottom: '15px' }}
            id="name"
            name="name"
            label="name"
            placeholder="recipe name"
            value={props.value}
            onChange={props.handleChange}
            error={props.error}
            helperText={props.helperText}
        />
    );
};

export default NameField;

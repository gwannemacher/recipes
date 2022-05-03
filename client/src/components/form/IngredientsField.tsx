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

const IngredientsField = (props) => {
    const { formik } = props;

    return (
        <TextField
            fullWidth
            multiline
            placeholder="enter ingredients, separated by a new line"
            sx={{ marginTop: '15px' }}
            id="ingredients"
            name="ingredients"
            label="ingredients"
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            error={
                formik.touched.ingredients && Boolean(formik.errors.ingredients)
            }
            helperText={formik.touched.ingredients && formik.errors.ingredients}
        />
    );
};

export default IngredientsField;

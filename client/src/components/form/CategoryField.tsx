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

import { Category } from '../../models/recipes.ts';

const NameField = (props) => {
    const { formik } = props;

    return (
        <FormControl fullWidth>
            <InputLabel>category</InputLabel>
            <Select
                fullWidth
                id="category"
                name="category"
                label="category"
                type="category"
                value={formik.values.category}
                onChange={formik.handleChange}
            >
                <MenuItem
                    sx={{ textTransform: 'lowercase' }}
                    value={Category.BREAKFAST}
                >
                    {Category.BREAKFAST}
                </MenuItem>
                <MenuItem
                    sx={{ textTransform: 'lowercase' }}
                    value={Category.SOUP}
                >
                    {Category.SOUP}
                </MenuItem>
                <MenuItem
                    sx={{ textTransform: 'lowercase' }}
                    value={Category.PASTA}
                >
                    {Category.PASTA}
                </MenuItem>
                <MenuItem
                    sx={{ textTransform: 'lowercase' }}
                    value={Category.OTHER}
                >
                    {Category.OTHER}
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default NameField;

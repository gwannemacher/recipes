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

import NameField from './NameField.tsx';
import CategoryField from './CategoryField.tsx';
import IngredientsField from './IngredientsField.tsx';
import InstructionsField from './InstructionsField.tsx';
import SubmitButton from './SubmitButton.tsx';
import { Category } from '../../models/recipes.ts';
import useAddRecipe from '../../hooks/useAddRecipe.ts';

const FormTitle = (props) => {
    return (
        <Box
            sx={{
                fontSize: '3em',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '50px',
            }}
        >
            New recipe
        </Box>
    );
};

const RecipeForm = (props) => {
    const navigate = useNavigate();
    const [addRecipe] = useAddRecipe();

    const validationSchema = yup.object({
        name: yup
            .string('enter recipe name')
            .required('recipe name is required'),
        ingredients: yup
            .string('enter ingredients list')
            .required('ingredient list is required'),
        instructions: yup
            .string('enter instructions list')
            .required('instructions list is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            category: Category.BREAKFAST,
            ingredients: '',
            instructions: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            addRecipe({
                variables: {
                    name: values.name,
                    category: values.category,
                    ingredients: values.ingredients,
                    instructions: values.instructions,
                },
            });
            navigate('/');
        },
    });

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '65px',
                textTransform: 'lowercase',
            }}
        >
            <Stack sx={{ width: '550px' }}>
                <FormTitle />
                <form onSubmit={formik.handleSubmit}>
                    <NameField formik={formik} />
                    <CategoryField formik={formik} />
                    <IngredientsField formik={formik} />
                    <InstructionsField formik={formik} />
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <SubmitButton />
                    </Box>
                </form>
            </Stack>
        </Box>
    );
};

export default RecipeForm;

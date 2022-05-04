import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import NameField from './NameField.tsx';
import CategoryField from './CategoryField.tsx';
import IngredientsField from './IngredientsField.tsx';
import InstructionsField from './InstructionsField.tsx';
import SubmitButton from './SubmitButton.tsx';
import { Category } from '../../models/recipes.ts';
import useAddRecipe from '../../hooks/useAddRecipe.ts';
import useGetRecipes from '../../hooks/useGetRecipes.ts';

const FormTitle = (props) => {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get('recipe');

    return (
        <Box
            sx={{
                fontSize: '3em',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '50px',
            }}
        >
            {recipeId ? 'Edit recipe' : 'New recipe'}
        </Box>
    );
};

const FormikForm = (props) => {
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
            name: props.recipe?.name ?? '',
            category: props.recipe?.category ?? Category.BREAKFAST,
            ingredients: props.recipe
                ? props.recipe.ingredients.reduce((p, c) => p + c + '\n', '')
                : '',
            instructions: props.recipe
                ? props.recipe.instructions.reduce((p, c) => p + c + '\n', '')
                : '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
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

const RecipeForm = (props) => {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get('recipe');

    const [loading, allRecipes] = useGetRecipes();
    const filtered = allRecipes?.filter((x) => x.id === recipeId);
    const recipe = filtered?.length > 0 ? filtered[0] : null;

    if (recipeId && (loading || !recipe)) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '350px',
                }}
            >
                <CircularProgress />
            </Box>
        );
    } else {
        return <FormikForm recipe={recipe} />;
    }
};

export default RecipeForm;

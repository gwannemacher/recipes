import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NameField from './NameField.tsx';
import CategoryField from './CategoryField.tsx';
import IngredientsField from './IngredientsField.tsx';
import InstructionsField from './InstructionsField.tsx';
import SubmitButton from './SubmitButton.tsx';
import CancelButton from './CancelButton.tsx';
import Category from '../../models/recipe-category.ts';
import useAddRecipe from '../../hooks/useAddRecipe.ts';
import useUpdateRecipe from '../../hooks/useUpdateRecipe.ts';
import useGetRecipes from '../../hooks/useGetRecipes.ts';
import { TitlePadding } from '../../layout/TitlePadding.tsx';

const FormTitle = (props) => {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get('recipe');

    return (
        <Box
            sx={{
                fontSize: '3em',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {recipeId ? 'Edit recipe' : 'New recipe'}
        </Box>
    );
};

const FormikForm = (props) => {
    const navigate = useNavigate();
    const [addRecipe] = useAddRecipe();
    const [updateRecipe] = useUpdateRecipe();

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
            if (props.recipe) {
                updateRecipe({
                    variables: {
                        id: props.recipe.id,
                        name: values.name,
                        category: values.category,
                        ingredients: values.ingredients,
                        instructions: values.instructions,
                    },
                });
            } else {
                addRecipe({
                    variables: {
                        name: values.name,
                        category: values.category,
                        ingredients: values.ingredients,
                        instructions: values.instructions,
                    },
                });
            }
            navigate('/');
        },
    });

    return (
        <Container
            maxWidth="md"
            sx={{ padding: '25px', flexGrow: 1, textTransform: 'lowercase' }}
        >
            <TitlePadding content={<FormTitle />} />
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ width: 'fit-content' }}>
                        <NameField
                            value={formik.values.name}
                            handleChange={formik.handleChange}
                            error={
                                formik.touched.name &&
                                Boolean(formik.errors.name)
                            }
                            helperText={
                                formik.touched.name && formik.errors.name
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ width: 'fit-content' }}>
                        <CategoryField
                            value={formik.values.category}
                            handleChange={formik.handleChange}
                        />{' '}
                    </Grid>
                    <Grid item xs={12} sx={{ width: 'fit-content' }}>
                        <IngredientsField
                            value={formik.values.ingredients}
                            handleChange={formik.handleChange}
                            error={
                                formik.touched.ingredients &&
                                Boolean(formik.errors.ingredients)
                            }
                            helperText={
                                formik.touched.ingredients &&
                                formik.errors.ingredients
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ width: 'fit-content' }}>
                        <InstructionsField
                            value={formik.values.instructions}
                            handleChange={formik.handleChange}
                            error={
                                formik.touched.instructions &&
                                Boolean(formik.errors.instructions)
                            }
                            helperText={
                                formik.touched.instructions &&
                                formik.errors.instructions
                            }
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <SubmitButton />
                    <CancelButton />
                </Box>
            </form>
        </Container>
    );
};

const RecipeLoading = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '350px',
            }}
        >
            <CircularProgress />
        </Container>
    );
};

const RecipeForm = (props) => {
    const [searchParams] = useSearchParams();
    const recipeId = searchParams.get('recipe');

    const { recipes } = useGetRecipes();
    const filtered = recipes?.filter((x) => x.id === recipeId);
    const recipe = filtered?.length > 0 ? filtered[0] : null;

    return (
        <Suspense fallback={<RecipeLoading />}>
            <FormikForm recipe={recipe} />
        </Suspense>
    );
};

export default RecipeForm;

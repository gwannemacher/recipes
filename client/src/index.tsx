import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from '@apollo/client';
import { useSearchParams } from 'react-router-dom';

import Home from './Home.tsx';
import Recipe from './components/Recipe.tsx';
import RecipeForm from './components/form/RecipeForm.tsx';
import EditModeContextProvider from './EditModeContextProvider.tsx';

import './index.css';

const httpLink = createHttpLink({
    uri: 'http://localhost:8080/graphql',
    // uri: 'https://gracula-recipes.herokuapp.com/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <EditModeContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:recipeId" element={<Recipe />} />
                        <Route path="/form" element={<RecipeForm />} />
                    </Routes>
                </EditModeContextProvider>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);

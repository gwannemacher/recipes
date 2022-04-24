import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.tsx';
import Recipe from './Recipe.tsx';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:recipeId" element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

import React from 'react';
import './index.module.css';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import DetailsPage from './pages/Details';
import BaseLayout from './components/BaseLayout';
import { HelmetProvider } from 'react-helmet-async';
import { getAccommodationsData } from './pages/Home';
import { getAboutData } from './pages/About';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<BaseLayout />}>
            <Route path='/' element={<HomePage />} loader={getAccommodationsData} errorElement={<ErrorPage />} />
            <Route path='details/:id' element={<DetailsPage />} errorElement={<ErrorPage />} />
            <Route path='apropos' element={<AboutPage />} loader={getAboutData} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} errorElement={<ErrorPage />} />
        </Route>
    )
);


const App = () => {
    return (
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    );
}
export default App

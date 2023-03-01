import React from 'react';
import './index.module.css';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import DetailsPage from './pages/Details';
import BaseLayout from './components/BaseLayout';
import { getAccommodationsData } from './pages/Home';
import { getAboutData } from './pages/About';
import { getAccommodationDataById } from './pages/Details';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<BaseLayout />} errorElement={<ErrorPage />}>
            <Route path='/' element={<HomePage />} loader={getAccommodationsData} />
            <Route path='details/:id' loader={({ params }) => {
                return getAccommodationDataById(params.id)
            }} element={<DetailsPage />} />
            <Route path='apropos' element={<AboutPage />} loader={getAboutData} />
        </Route>
    )
);


const App = () => {
    return (
        <RouterProvider router={router} />
    );
}
export default App

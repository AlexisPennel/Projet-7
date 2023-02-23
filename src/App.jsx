import React from 'react'
import './index.module.css'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import AboutPage from './pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import DetailsPage from './pages/Details'
import BaseLayout from './components/BaseLayout'
import jsonData from './data/logements.json'


const getData = () => {
    return jsonData
};


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<BaseLayout />}>
            <Route path='/' element={<HomePage />} loader={getData} errorElement={<ErrorPage />} />
            <Route path='details/:id' element={<DetailsPage />} errorElement={<ErrorPage />} />
            <Route path='apropos' element={<AboutPage />} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} errorElement={<ErrorPage />} />
        </Route>
    )
);


const App = () => {
    return (
        <RouterProvider router={router} />
    );
}
export default App

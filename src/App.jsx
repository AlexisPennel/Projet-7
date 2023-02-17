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
    try {
        console.log(jsonData)
        return jsonData
    } catch (error) {
        alert(error)
    }
};


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<BaseLayout />}>
            <Route path='/' element={<HomePage />} loader={getData} />
            <Route path='details' element={<DetailsPage />} />
            <Route path='apropos' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);


const App = () => {
    return (
        <RouterProvider router={router} />
    );
}
export default App

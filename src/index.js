import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import AboutPage from './pages/About'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsPage from './pages/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/details',
    element: <DetailsPage />,
  },
  {
    path: '/apropos',
    element: <AboutPage />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

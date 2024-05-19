// src/App.js
import React from 'react';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './components/Layout.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register.jsx';
import ProductPage from './pages/ProductPage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "login",
          element: <LoginPage />
        },{
          path: "register",
          element: <Register />
        },{
          path:"product",
          element:<ProductPage/>

        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;

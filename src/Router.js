// src/Router.js
import React from 'react';
import LoginPage from './pages/log-in/LoginPage';
import HomePage from './pages/home/homepage';
import Chart from './pages/Chart/Chart';
import ProductDetailPage from './productDataPage/dataPage';

const AppRouter = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/charts", element: <Chart /> },
    { path: "/product/:id", element: <ProductDetailPage /> },
];

export default AppRouter;

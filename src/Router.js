import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/log-in/LoginPage'; 
import HomePage from './pages/home/homepage';
import Chart from './pages/Chart/Chart';

const AppRouter = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/charts", element: <Chart /> },
   
];

export default AppRouter;

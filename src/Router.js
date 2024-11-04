import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/log-in/LoginPage'; 
import HomePage from './pages/home/homepage';

const AppRouter = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
   
];

export default AppRouter;

import React from 'react';
import './App.css';
// import HomePage from './pages/home/homepage';
import AppRouter from './Router';
import NavBar from './header/nav-bar/nav';
import { Routes, Route } from 'react-router-dom';

function App() {
  const routes = AppRouter;

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

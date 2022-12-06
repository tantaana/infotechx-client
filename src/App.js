import logo from './header.png';
import { useState, useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { routes } from './/routes/routes';


function App() {

  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

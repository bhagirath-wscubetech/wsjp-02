import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Gallery from './Pages/Gallery';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/gallery',
      element: <Gallery />
    },
    {
      path: "/*",
      element: <NotFound />
    }
  ]
);
// array of object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
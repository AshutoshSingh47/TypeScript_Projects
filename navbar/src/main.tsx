import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import Error_Page from './errors/Error_Page.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Help from './pages/Help.tsx';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import "./index.scss";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error_Page />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='help' element={<Help />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

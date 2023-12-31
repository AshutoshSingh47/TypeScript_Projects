import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import Error_Page from './errors/Error_Page.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Market from './pages/Market.tsx';
import Join from './pages/Join.tsx';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import "./index.scss";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error_Page />}>
      <Route path='' element={<Home />} />
      <Route path='market' element={<Market />} />
      <Route path='about' element={<About />} />
      <Route path='join' element={<Join />} />
    </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

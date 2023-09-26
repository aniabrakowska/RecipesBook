import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/Root/root';
import ErrorPage from './routes/error-page';
import Categories from './routes/categories';
import Recipe from './routes/recipe';
import Category from './routes/category';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/category/:catId",
    element: <Category />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/categories/:categoryId",
    element: <Category/>,
  },
  {
    path: "recipe/:recipeId",
    element: <Recipe />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


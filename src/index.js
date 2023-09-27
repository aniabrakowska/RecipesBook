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
    path: "/RecipesBook",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/RecipesBook/category",
    element: <Category />,
  },
  {
    path: "/RecipesBook/category/:catId",
    element: <Category />,
  },
  {
    path: "/RecipesBook/categories",
    element: <Categories />,
  },
  {
    path: "/RecipesBook/categories/:categoryId",
    element: <Category/>,
  },
  {
    path: "/RecipesBook/recipe/:recipeId",
    element: <Recipe />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


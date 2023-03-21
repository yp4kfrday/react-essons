import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />, 
      errorElement: <NotFound />,
      children: [
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


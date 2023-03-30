import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';

import App from './App';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import DetailedPerfumePage from './pages/DetailedPerfumePage';

import store  from './redux/store.js';
import MainLayout from './layouts/MainLayout';


const router = createBrowserRouter([
  {
    path: "*",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/*",
        element: <App />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "perfume/:id",
        element: <DetailedPerfumePage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


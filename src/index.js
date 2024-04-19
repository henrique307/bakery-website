import { Provider } from "react-redux";
import { store } from "./components/utils/slice/slices";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PaymentComponent } from "./components/payment/payment";

const router = createBrowserRouter([
  {
    path: "/bakery-website",
    element: (
      <App />
    ),
  },
  {
    path: "/bakery-website/payment",
    element: <PaymentComponent/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import { Provider } from "react-redux";
import { store } from "./components/utils/slice/slices.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import stripe from "stripe";
import { PaymentComponent } from "./components/payment/payment.jsx";
import { ReturnComponent } from "./components/payment/components/return.jsx";
import { BlogComponent } from "./components/blog/blog.jsx";
import './index.css';

export const stripeInstance = stripe(
  "sk_test_51OO0ZwCaFt3tFYFT7lW7sA1nRmvFj1UnlnMoAGHPJha26bmxIj1Uz0qSS7kiBYXjK2oP6fvxggJM0fCVW20vnTR500UlTbAOF3"
);

const router = createBrowserRouter([
  {
    path: "/bakery-website",
    element: <App />,
  },
  {
    path: "/bakery-website/payment",
    element: <PaymentComponent />
  },
  {
    path: "/return",
    element: <ReturnComponent />
  },
  {
    path: "/blog",
    element: <BlogComponent />
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

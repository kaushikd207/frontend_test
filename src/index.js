import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/Cart", element: <Cart /> },
    ],
  },
]);
root.render(
  <RouterProvider router={appRouter}>
    <AppLayout />
  </RouterProvider>
);
reportWebVitals();

import React from "react";
import Home from "../Page/Home";
import College from "../Page/College";
import Department from "../Page/Department";
import Layout from "../layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "College", element: <College /> },
      { path: "Department", element: <Department /> },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;

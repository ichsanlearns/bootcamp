import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";

import Home from "../pages/home/home";
import Todo from "../pages/todo/todo";

import Register from "../pages/auth/register";
import Login from "../pages/auth/login";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // {
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashboardHome />,
  //     }
  //   ]
  // }
]);

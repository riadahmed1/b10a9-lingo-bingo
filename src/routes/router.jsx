import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../layout/Home";
import Tutorials from "../layout/Tutorials";
import StartLearning from "../layout/StartLearning";
import AboutUs from "../layout/AboutUs";
import LessonDetails from "../layout/LessonDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "start-learning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "lesson/:id",
        element: (
          <PrivateRoute>
            <LessonDetails></LessonDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/vocabularies.json"),
      },
      {
        path: "tutorials",
        element: <Tutorials></Tutorials>,
      },
      {
        path: "About-Us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
      {
        path: "*",
        element: <h1>Error</h1>,
      },
    ],
  },
]);

export default router;

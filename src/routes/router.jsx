import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../layout/Home";
import Tutorials from "../layout/Tutorials";
import StartLearning from "../layout/StartLearning";
import AboutUs from "../layout/AboutUs";
import LessonDetails from "../layout/LessonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "start-learning",
        element: <StartLearning></StartLearning>,
      },
      {
        path: "lesson/:id",
        element: <LessonDetails></LessonDetails>,
        loader: () => fetch('/vocabularies.json')
      },
      {
        path: "tutorials",
        element: <Tutorials></Tutorials>
      },
      {
        path: "About-Us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "auth",
        element: <h1>Auth</h1>,
      },
      {
        path: "*",
        element: <h1>Error</h1>,
      },
    ],
  },
]);

export default router;

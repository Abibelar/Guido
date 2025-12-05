import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import LessonPage from "./pages/LessonPage.jsx";
import PracticePage from "./pages/PracticePage.jsx";
//import Layout from "./pages/Layout.jsx";
import Lesson1_1 from "./components/lessons/1/lesson1_1.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Lesson1_1,
  },
  {
    path: "lesson/:lessonId",
    Component: LessonPage,
  },
  {
    path: "practice",
    Component: PracticePage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

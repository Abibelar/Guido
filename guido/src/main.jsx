import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import LessonPage from "./pages/LessonPage.jsx";
import PracticePage from "./pages/PracticePage.jsx";
import Layout from "./pages/Layout.jsx";

const router = createBrowserRouter([
  {Component: Layout, children: [
  {

    path: "/",
    Component: App,
  },
  {
    path: "lesson/:lessonId",
    Component: LessonPage,
  },
  {
    path: "practice",
    Component: PracticePage,
  },
]}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

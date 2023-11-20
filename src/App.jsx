import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Projects from "./pages/projects/Projects";
import Activity from "./pages/activity/Activity";
import AppProject from "./pages/projects/AppProject";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path=":activity" element={<Activity/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="project/:project" element={<AppProject/>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

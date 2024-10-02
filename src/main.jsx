import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<LoginPage/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
  </Route>
))
createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);

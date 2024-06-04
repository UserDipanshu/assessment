import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MainPage from "./pages/main/MainPage.jsx";
import FormPage from "./pages/form/FormPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [{ path: "", element: <MainPage /> }, { path : "form", element : <FormPage />}],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

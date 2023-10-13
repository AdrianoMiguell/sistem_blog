import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/client/Home";
// import Header from "./Components/Header";
import Register from "./pages/client/Register";
import Login from "./pages/client/Login";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import ControlCenter from "./pages/admin/ControlCenter";
import Workspace from "./pages/client/Workspace";
import Perfil from "./pages/client/Perfil";
import Page from "./pages/client/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/controlcenter",
        element: <ControlCenter />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/workspace",
        element: <Workspace />,
      },
      {
        path: "/page",
        element: <Page />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

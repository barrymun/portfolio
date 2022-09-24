import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <Error />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <App>
//     <RouterProvider router={router} />
//   </App>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

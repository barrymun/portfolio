import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <App>
//     <RouterProvider router={router} />
//   </App>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          /> */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

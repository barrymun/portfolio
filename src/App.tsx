import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Fallback from "@/components/Fallback";
import Error from "@/pages/Error"; // lazy loading not required here

const Home = React.lazy(() => import("@/pages/Home"));
const About = React.lazy(() => import("@/pages/About"));

// laxy loading: https://github.com/remix-run/react-router/tree/dev/examples/lazy-loading/src
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route
          index
          element={
            <React.Suspense fallback={<Fallback />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<Fallback />}>
              <About />
            </React.Suspense>
          }
        />
        {/* <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<Fallback />}>
              <Dashboard />
            </React.Suspense>
          }
        /> */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}
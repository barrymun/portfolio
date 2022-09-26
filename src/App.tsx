import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Fallback from "@/components/Fallback";
import Error from "@/pages/Error"; // lazy loading not required here

const Home = React.lazy(() => import("@/pages/Home"));
const About = React.lazy(() => import("@/pages/About"));
const Projects = React.lazy(() => import("@/pages/Projects"));
const Stack = React.lazy(() => import("@/pages/Stack"));

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
        <Route
          path="projects"
          element={
            <React.Suspense fallback={<Fallback />}>
              <Projects />
            </React.Suspense>
          }
        />
        <Route
          path="stack"
          element={
            <React.Suspense fallback={<Fallback />}>
              <Stack />
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
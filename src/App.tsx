import { createBrowserRouter, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Error from "@/pages/Error";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
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
  )
}
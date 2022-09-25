import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <div className="bg-zinc-50 dark:bg-black fixed flex justify-center sm:px-8 inset-0">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
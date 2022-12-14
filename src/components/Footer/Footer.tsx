import React from "react";
import { Link } from "react-router-dom";
import Container from "@/components/Container";

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-32">
      {/* <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/stack">Stack</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Neil Murphy
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer> */}
      <div className="mx-auto max-w-7xl lg:px-8">
        <Container className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/stack">Stack</NavLink>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Neil Murphy
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

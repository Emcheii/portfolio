import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import About from "./sections/about";
import { ThemeProvider } from "./context/ThemeContext";

const Skills = lazy(() => import("./sections/skills"));
const Projects = lazy(() => import("./sections/projects"));
const Contact = lazy(() => import("./sections/contact"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-linear-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white">
        <div
          className={`pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-slate-950/90 transition-opacity duration-300 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="flex w-64 flex-col items-center gap-6 px-6 text-center">
            <div className="relative flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-sky-400 to-indigo-600 opacity-20 blur-xl" />
              <div className="loader-ring absolute inset-0 rounded-3xl border-2 border-blue-400/20 border-t-sky-300 border-r-indigo-400" />
              <span className="relative text-2xl font-bold tracking-tight text-white">
                M
              </span>
            </div>
            <div className="w-full">
              <p className="text-sm font-semibold tracking-[0.3em] text-slate-100 uppercase">
                Marlou Tabil
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Building digital experiences
              </p>
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-800">
                <div className="loader-progress h-full rounded-full bg-linear-to-r from-sky-400 via-blue-500 to-indigo-500" />
              </div>
            </div>
          </div>
        </div>

        <Navbar />
        <About />
        <Suspense fallback={null}>
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;

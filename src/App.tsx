import { lazy, Suspense } from "react";
import Navbar from "./components/navbar";
import About from "./sections/about";

const Skills = lazy(() => import("./sections/skills"));
const Projects = lazy(() => import("./sections/projects"));
const Contact = lazy(() => import("./sections/contact"));

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-linear-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 dark:text-white">
      <Navbar />
      <About />
      <Suspense fallback={null}>
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;

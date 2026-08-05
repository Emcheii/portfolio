import Navbar from "./components/navbar";
import About  from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App(){
  return(
    <div className="bg-black text-white min-h-screen w-full">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
    
  )
};

export default App;
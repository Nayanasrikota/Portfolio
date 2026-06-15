import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

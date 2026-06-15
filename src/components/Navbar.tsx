import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-6`}
    >
      <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'w-[95%] md:w-[800px] bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' : 'w-full max-w-7xl bg-transparent border-transparent'}`}>
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
             <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white font-serif italic text-lg font-medium border-[1.5px] border-white scale-105 group-hover:scale-100 transition-transform">
               N
             </div>
          </div>
          <span className="text-white font-medium tracking-tight group-hover:text-neutral-300 transition-colors">Nayana Sri</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2.5 rounded-full border border-white/5">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
}

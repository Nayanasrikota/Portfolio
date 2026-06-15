import { motion } from "motion/react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { data } from "../data";

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-black bg-mesh">
      {/* Subtle overlays to enhance depth */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-neutral-300 mb-12 uppercase tracking-widest backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-[6.5rem] font-display font-medium tracking-tight text-white mb-8 max-w-5xl leading-[1.05]"
          >
            Crafting scalable <br className="hidden md:block"/>
            <span className="text-gradient">software solutions.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-neutral-400 leading-relaxed max-w-2xl mb-12 font-light"
          >
            I'm <span className="text-white font-medium">{data.name}</span>, a {data.role} specializing in Java, backend architectures, and modern web applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.15em] rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 border-l-0 sm:border-l-2">
              <SocialLink href={`mailto:${data.contact.email}`} icon={<Mail className="w-4 h-4" />} />
              <SocialLink href={data.contact.linkedin} icon={<Linkedin className="w-4 h-4" />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full border border-white/10 bg-transparent flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

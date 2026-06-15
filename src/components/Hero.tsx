import { motion } from "motion/react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { data } from "../data";

export function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-300 mb-12 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white mb-8 max-w-4xl leading-[1.1]"
          >
            Crafting scalable <br className="hidden md:block"/>
            <span className="text-neutral-500">software solutions.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-400 leading-relaxed max-w-3xl mb-12 font-light"
          >
            I'm <span className="text-white font-medium">{data.name}</span>, a {data.role} specializing in Java, backend architectures, and modern web applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-all hover:scale-105"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4">
              <SocialLink href={`mailto:${data.contact.email}`} icon={<Mail className="w-5 h-5" />} />
              <SocialLink href={data.contact.linkedin} icon={<Linkedin className="w-5 h-5" />} />
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
      className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-105 transition-all backdrop-blur-sm"
    >
      {icon}
    </a>
  );
}

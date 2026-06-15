import { motion } from "motion/react";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { data } from "../data";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#0a0a0a] relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 mb-8 uppercase tracking-widest backdrop-blur-sm">
            What's Next?
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-medium text-white mb-10 tracking-tight leading-[1.1]">
            Let's build something <br className="hidden sm:block"/> amazing together.
          </h2>
          <p className="text-neutral-400 text-xl md:text-2xl mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            I'm actively looking for a Java Developer role or software engineering opportunities. My inbox is always open!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
            <a 
              href={`mailto:${data.contact.email}`}
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href={`tel:${data.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-medium rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5 text-neutral-400" />
              {data.contact.phone}
            </a>
          </div>
          
          <div className="w-full pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-neutral-500">
            <div className="font-light tracking-wide">© {new Date().getFullYear()} {data.name}.</div>
            <div className="flex items-center gap-8 font-medium">
              <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href={`mailto:${data.contact.email}`} className="hover:text-white transition-colors">Email</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { data } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Featured Work">
          Recent Projects
        </SectionHeading>

        <div className="space-y-24 md:space-y-40">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-xl overflow-hidden relative bg-white/5 border border-white/10 mx-auto max-w-3xl">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-1000" />
              </div>
              
              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-2xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-12 space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-neutral-400 font-light text-[15px]">
                      <span className="mr-5 mt-2.5 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-12">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-widest font-medium text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-8">
                   {project.links?.demo && (
                     <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-black font-bold bg-white px-8 py-4 rounded-full hover:bg-neutral-200 transition-all">
                       Live Demo
                       <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                     </a>
                   )}
                   {project.links?.repo && (
                     <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.1em] font-bold text-neutral-400 hover:text-white transition-colors">
                       <Github className="w-4 h-4" />
                       View Source
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

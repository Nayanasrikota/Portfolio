import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { data } from "../data";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Featured Work">
          Recent Projects
        </SectionHeading>

        <div className="space-y-16 md:space-y-32">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-20 items-center group`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden relative bg-white/5 border border-white/10 mx-auto max-w-2xl">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-[#0a0a0a]" />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-10 space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-neutral-300 font-light">
                      <span className="mr-5 mt-2.5 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-8">
                   {project.links?.demo && (
                     <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-medium hover:text-neutral-300 transition-colors bg-white/10 px-6 py-3 rounded-full hover:bg-white/20">
                       Live Demo
                       <ArrowUpRight className="w-5 h-5" />
                     </a>
                   )}
                   {project.links?.repo && (
                     <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                       <Github className="w-5 h-5" />
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

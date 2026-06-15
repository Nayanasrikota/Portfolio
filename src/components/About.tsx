import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { data } from "../data";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="About Me">
          Driven to build,<br/>optimize, and scale.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
              {data.objective}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-10"
          >
            <div className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.03] transition-colors duration-500">
              <h3 className="text-xl font-medium text-white mb-8">Technical Arsenal</h3>
              <div className="space-y-10">
                <div>
                  <div className="text-sm font-medium text-neutral-500 mb-5 uppercase tracking-widest">Core Languages</div>
                  <div className="flex flex-wrap gap-3">
                    {data.skills.languages.map(skill => (
                      <span key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-sm font-medium hover:bg-white/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-neutral-500 mb-5 uppercase tracking-widest">Web Technologies</div>
                  <div className="flex flex-wrap gap-3">
                    {data.skills.web.map(skill => (
                      <span key={skill} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-sm font-medium hover:bg-white/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

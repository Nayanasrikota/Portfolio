import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { data } from "../data";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading subtitle="Leadership" centered>
          Positions of Responsibility
        </SectionHeading>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                  {exp.role}
                </h3>
                <p className="text-lg md:text-xl text-neutral-400 font-light">
                  {exp.organization}
                </p>
              </div>
              
              <ul className="space-y-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start text-neutral-300 font-light text-lg">
                    <span className="mr-5 mt-3 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

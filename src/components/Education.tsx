import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { data } from "../data";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading subtitle="Academic Journey" centered>
          Education
        </SectionHeading>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl md:text-3xl font-medium text-white">{edu.institution}</h3>
                <span className="inline-flex px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
              
              <div className="text-xl md:text-2xl text-neutral-400 font-light mb-6">{edu.degree}</div>
              <div className="inline-block px-4 py-2 rounded-xl bg-black/50 text-neutral-300 text-sm font-medium border border-white/10">
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

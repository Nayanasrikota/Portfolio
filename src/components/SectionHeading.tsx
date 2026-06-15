import { motion } from "motion/react";

export function SectionHeading({ children, subtitle, centered = false }: { children: React.ReactNode; subtitle?: string; centered?: boolean }) {
  return (
    <div className={`mb-16 md:mb-24 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 mb-6 uppercase tracking-widest backdrop-blur-sm"
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4"
      >
        {children}
      </motion.h2>
    </div>
  );
}

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeader({ title, subtitle, children }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}

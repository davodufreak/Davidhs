import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="home"
      className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 max-w-[1400px] mx-auto"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block py-1.5 px-3 rounded-full bg-zinc-100 text-sm font-medium text-zinc-600 mb-8 border border-zinc-200">
            Available for leadership roles
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-zinc-900 leading-[1.05] mb-8">
            Designing digital <span className="text-zinc-400">products</span>
            <br />
            & leading <span className="text-zinc-400">teams</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 sm:items-center text-lg md:text-xl text-zinc-600 max-w-2xl"
        >
          <p className="leading-relaxed">
            I'm a Product Designer focused on aligning user needs with business goals, 
            while mentoring designers to build robust, scalable design practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center gap-4"
        >
          <a 
            href="#work"
            className="group flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-zinc-500 transition-colors">
              <ArrowDownRight className="w-4 h-4" />
            </div>
            See my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

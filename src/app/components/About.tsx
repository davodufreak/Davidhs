import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const experience = [
  {
    role: "Lead Product Designer",
    company: "Acme Corp",
    period: "2021 - Present",
    desc: "Led a team of 5 designers. Spearheaded the redesign of the core enterprise platform resulting in a 40% increase in user retention. Implemented cross-functional design rituals.",
  },
  {
    role: "Senior Product Designer",
    company: "Globex UI",
    period: "2018 - 2021",
    desc: "Designed end-to-end flows for consumer fintech app. Established the initial design system used by 3 product teams.",
  },
  {
    role: "UX/UI Designer",
    company: "Initech",
    period: "2015 - 2018",
    desc: "Focused on user research and wireframing for complex B2B dashboards.",
  },
];

const education = [
  {
    degree: "Master of Human-Computer Interaction",
    school: "Carnegie Mellon University",
    year: "2015",
  },
  {
    degree: "B.F.A in Graphic Design",
    school: "Rhode Island School of Design",
    year: "2013",
  },
];

export function About() {
  return (
    <section 
      id="about" 
      className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-zinc-50 border-t border-zinc-200"
    >
      <SectionHeader 
        title="About me" 
        subtitle="Bridging the gap between user empathy and business strategy through systems thinking and servant leadership."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mt-16">
        {/* Left Column: Text & CV */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-zinc lg:prose-lg"
          >
            <p className="text-zinc-600 leading-relaxed mb-6">
              With over 8 years in the digital product space, I've evolved from 
              crafting pixels to cultivating design teams. I believe that great 
              products are the output of healthy, empowered teams.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-10">
              My approach focuses on establishing robust design operations, 
              fostering a culture of continuous feedback, and ensuring design 
              has a strategic voice at the executive table.
            </p>
            
            <button className="group inline-flex items-center gap-3 px-6 py-3.5 bg-zinc-900 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-sm">
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Download Full CV
            </button>
          </motion.div>
        </div>

        {/* Right Column: Experience & Studies */}
        <div className="lg:col-span-7 flex flex-col gap-16">
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200">
              <div className="p-2 bg-zinc-100 rounded-lg text-zinc-900">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900">Career</h3>
            </div>
            
            <div className="flex flex-col gap-10">
              {experience.map((job, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-0 border-l sm:border-l-0 border-zinc-200 ml-3 sm:ml-0">
                  <div className="absolute w-3 h-3 bg-zinc-900 rounded-full -left-1.5 sm:hidden top-2 ring-4 ring-zinc-50" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-1 sm:gap-4">
                    <h4 className="text-xl font-medium text-zinc-900">{job.role}</h4>
                    <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider shrink-0">{job.period}</span>
                  </div>
                  <h5 className="text-lg text-zinc-700 mb-3">{job.company}</h5>
                  <p className="text-zinc-600 leading-relaxed max-w-2xl">{job.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-200">
              <div className="p-2 bg-zinc-100 rounded-lg text-zinc-900">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900">Studies</h3>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm">
                  <span className="inline-block text-sm font-medium text-zinc-500 mb-3">{edu.year}</span>
                  <h4 className="text-lg font-medium text-zinc-900 mb-1 leading-tight">{edu.degree}</h4>
                  <p className="text-zinc-600">{edu.school}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

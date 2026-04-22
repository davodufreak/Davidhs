import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Quote } from "lucide-react";

export function Leadership() {
  const { t } = useLanguage();

  const principles = [
    {
      title: t("leadership.p1.title"),
      desc: t("leadership.p1.desc"),
    },
    {
      title: t("leadership.p2.title"),
      desc: t("leadership.p2.desc"),
    },
    {
      title: t("leadership.p3.title"),
      desc: t("leadership.p3.desc"),
    },
    {
      title: t("leadership.p4.title"),
      desc: t("leadership.p4.desc"),
    },
  ];

  const testimonials = [
    {
      text: t("leadership.testimonial1.text"),
      name: t("leadership.testimonial1.name"),
      role: t("leadership.testimonial1.role"),
    },
    {
      text: t("leadership.testimonial2.text"),
      name: t("leadership.testimonial2.name"),
      role: t("leadership.testimonial2.role"),
    },
    {
      text: t("leadership.testimonial3.text"),
      name: t("leadership.testimonial3.name"),
      role: t("leadership.testimonial3.role"),
    },
  ];

  return (
    <div className="w-full pt-24 pb-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-32"
        >
          <span className="text-accent font-sans text-sm tracking-widest uppercase mb-6 block">
            {t("leadership.badge")}
          </span>
          <h1 className="text-5xl md:text-[72px] font-serif leading-[1.1] text-foreground mb-8">
            {t("leadership.title")}
          </h1>
          <p className="text-xl md:text-2xl font-sans text-muted-foreground leading-relaxed">
            {t("leadership.subtitle")}
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 mb-32 border-t border-border pt-16">
          {principles.map((principle, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif text-foreground mb-4">{principle.title}</h3>
              <p className="text-lg font-sans text-muted-foreground leading-relaxed">{principle.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card border border-border p-8 flex flex-col md:h-full"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent mb-6" strokeWidth={1.5} />
              
              {/* Testimonial Text */}
              <p className="text-base font-sans text-foreground leading-relaxed mb-8 flex-grow">
                {testimonial.text}
              </p>
              
              {/* Name and Role */}
              <div className="mt-auto">
                <p className="text-base font-sans text-foreground font-medium mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm font-sans text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
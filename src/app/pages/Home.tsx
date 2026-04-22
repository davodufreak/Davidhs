import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "figma:asset/9e415f93ed1fb46472c3daec33e8dd3c6b3a6bda.png";
import cardsHomeImage from "figma:asset/734083b9382b30c4e03f5519fd3454255715a6a8.png";
import transfersHomeImage from "figma:asset/63eb12f9f58493196f8a1e3f28c2a2cc4517ae35.png";
import essityHomeImage from "figma:asset/c3b9bec88dc046707d4b1bfc53255ed50eda4d17.png";

export function Home() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const projects = [
    {
      slug: "scotia-tarjetas",
      title: t("scotia.title"),
      description: t("scotia.summary"),
      metrics: ["5M MXN", "+2.6 pts NPS", "+40K"],
      image: cardsHomeImage
    },
    {
      slug: "transferencias-scotiamovil",
      title: t("transfer.title"),
      description: t("transfer.summary"),
      metrics: ["35→2 min", "+32%", "+2.7 pts NPS"],
      image: transfersHomeImage
    },
    {
      slug: "tealeaf-essity",
      title: t("tealeaf.title"),
      description: t("tealeaf.summary"),
      metrics: ["+3%", "-18%", "3 sitios"],
      image: essityHomeImage
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background -mt-20 md:-mt-24">
        {/* Desktop Background Parallax Image */}
        <motion.div
          style={{ y }}
          className="hidden md:block absolute inset-0 w-full h-[130%] -top-[15%] z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-background/85" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 pt-32 md:pt-48 pb-20 md:pb-40 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <motion.div 
              className="col-span-12 lg:col-span-10 xl:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-[72px] lg:text-[84px] font-serif leading-[1.1] tracking-tight text-foreground mb-6 md:mb-8"><span className="font-serif bg-[linear-gradient(transparent_65%,#BAF289_65%,#BAF289_92%,transparent_92%)] dark:bg-[linear-gradient(transparent_65%,#77A54F_65%,#77A54F_92%,transparent_92%)] box-decoration-clone pr-1">{t("home.hero.titlePart1")}</span><span className="font-serif">{t("home.hero.titlePart2")}</span></h1>
              <p className="text-xl md:text-2xl font-sans text-muted-foreground leading-relaxed max-w-3xl mb-8 md:mb-12">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <Link 
                  to="/work" 
                  className="group inline-flex items-center gap-3 text-[16px] font-sans uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  {t("home.hero.selectedWork")} <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-[15px] font-sans uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  {t("home.hero.contact")}
                </Link>
              </div>
              
              {/* Mobile Image (appears after CTA) */}
              <div className="md:hidden mt-12 w-full rounded-[12px] overflow-hidden">
                <img src={heroImage} alt="Speaking at an event" className="w-full h-auto grayscale object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto pt-24 md:pt-40 pb-32">
        <div className="flex justify-between items-end border-b border-border pb-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            <span className="bg-[linear-gradient(transparent_65%,#BAF289_65%,#BAF289_92%,transparent_92%)] dark:bg-[linear-gradient(transparent_65%,#77A54F_65%,#77A54F_92%,transparent_92%)] box-decoration-clone px-1">
              {t("home.featured.title")}
            </span>
          </h2>
        </div>

        <div className="flex flex-col space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group cursor-pointer block"
            >
              <Link to={`/work/${project.slug}`} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                
                {/* Text Content */}
                <div className={`col-span-1 lg:col-span-5 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="text-sm font-sans px-4 py-2 bg-muted text-foreground rounded-full transition-colors">
                        {metric}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-3 text-[15px] font-sans font-bold text-foreground group-hover:text-accent transition-colors">
                    {t("home.project.readCaseStudy")} 
                    <span className="w-8 h-8 rounded-full bg-[#BAF289]/30 dark:bg-[#BAF289]/20 group-hover:bg-[#BAF289] flex items-center justify-center transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-foreground transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </span>
                </div>

                {/* Image */}
                <div className={`col-span-1 lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="overflow-hidden rounded-[12px] bg-muted aspect-[4/3] w-full relative">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 origin-center"
                    />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
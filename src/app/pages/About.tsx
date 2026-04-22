import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import aboutImage from "figma:asset/f29fb79a5641e12ca38aa58c2acd549d852930aa.png";

export function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-24 pb-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-5">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-muted w-full overflow-hidden rounded-[12px]"
          >
            <img 
              src={aboutImage} 
              alt="David Hurtado" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </motion.div>
        </div>

        {/* Right Column: Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.1] text-foreground mb-10">
              {t("about.title.part1")}
              <span className="font-serif bg-[linear-gradient(transparent_65%,#BAF289_65%,#BAF289_92%,transparent_92%)] dark:bg-[linear-gradient(transparent_65%,#77A54F_65%,#77A54F_92%,transparent_92%)] box-decoration-clone pr-1">
                {t("about.title.part2")}
              </span>
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl font-sans text-muted-foreground leading-relaxed mb-16">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
              <p>{t("about.p5")}</p>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-16 pt-12 border-t border-border">
              <div>
                <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-4">{t("about.coreFocus")}</h3>
                <ul className="space-y-3 text-[15px] font-sans text-muted-foreground">
                  <li>{t("about.focus1")}</li>
                  <li>{t("about.focus2")}</li>
                  <li>{t("about.focus3")}</li>
                  <li>{t("about.focus4")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-4">{t("about.certifications")}</h3>
                <ul className="space-y-3 text-[15px] font-sans text-muted-foreground">
                  <li>{t("about.cert1")}</li>
                  <li>{t("about.cert2")}</li>
                  <li>{t("about.cert3")}</li>
                </ul>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 text-[16px] font-sans uppercase tracking-widest text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              {t("about.cta")} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
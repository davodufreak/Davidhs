import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-24 pb-32 min-h-[70vh] flex flex-col justify-center bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="text-accent font-sans text-sm tracking-widest uppercase mb-6 block">
              {t("contact.badge")}
            </span>
            <h1 className="text-5xl md:text-[84px] font-serif leading-[1.1] text-foreground mb-8">
              {t("contact.title")}
            </h1>
            <p className="text-xl md:text-2xl font-sans text-muted-foreground leading-relaxed max-w-2xl mb-16">
              {t("contact.subtitle")}
            </p>

            <a 
              href="mailto:david.hurtado91@gmail.com" 
              className="group inline-flex items-center text-3xl md:text-5xl font-serif text-foreground hover:text-accent transition-colors"
            >
              {t("contact.emailCTA")}
              <ArrowRight className="ml-6 w-8 h-8 transform group-hover:translate-x-4 transition-transform duration-500" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-end lg:pb-4 space-y-12"
          >
            <div>
              <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">{t("contact.location")}</h3>
              <p className="font-sans text-lg text-muted-foreground">{t("contact.locationVal1")}<br/>{t("contact.locationVal2")}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">{t("contact.phone")}</h3>
              <p className="font-sans text-lg text-muted-foreground">+52 561-127-4440</p>
            </div>

            <div>
              <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-foreground mb-2">{t("contact.social")}</h3>
              <a href="https://linkedin.com/in/davidhurtado91" target="_blank" rel="noreferrer" className="font-sans text-lg text-muted-foreground hover:text-foreground transition-colors underline decoration-border underline-offset-4">
                {t("contact.linkedin")}
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
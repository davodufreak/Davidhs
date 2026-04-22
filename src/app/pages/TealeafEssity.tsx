import image_99371886733eaf7139ac856f26a05cf8b5c1505c from 'figma:asset/99371886733eaf7139ac856f26a05cf8b5c1505c.png'
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CaseStudyLayout } from "../components/case-study/CaseStudyLayout";
import { SectionHeader } from "../components/case-study/SectionHeader";
import { MetricCards } from "../components/case-study/MetricCards";
import { DecisionBlock } from "../components/case-study/DecisionBlock";
import essitySectionImage from "figma:asset/fcb6abf83a47533cc8abfbc27c2920f2383794bd.png";

export function TealeafEssity() {
  const { t, language } = useLanguage();

  const sections = [
    { id: "summary", number: "01", title: t("case.toc.summary") },
    { id: "context", number: "02", title: t("case.toc.context") },
    { id: "role", number: "03", title: t("case.toc.role") },
    { id: "research", number: "04", title: t("case.toc.research") },
    { id: "strategy", number: "05", title: t("case.toc.strategy") },
    { id: "design", number: "06", title: t("case.toc.design") },
    { id: "impact", number: "07", title: t("case.toc.impact") },
    { id: "reflection", number: "08", title: t("case.toc.reflection") },
  ];

  const summaryMetrics = [
    { value: "+3%", label: language === 'es' ? "Ventas anuales" : "Annual Sales" },
    { value: "-18%", label: language === 'es' ? "Fallos de pago" : "Payment Failures" },
    { value: "3", label: language === 'es' ? "Sitios escalados" : "Sites Scaled" },
  ];

  return (
    <article className="w-full bg-background pt-12 pb-32">
      {/* Back Link */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        <Link to="/work" className="inline-flex items-center text-muted-foreground hover:text-foreground font-sans text-sm tracking-widest uppercase transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          {t("case.back")}
        </Link>
      </div>

      {/* Hero Header */}
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-[72px] font-serif leading-[1.1] text-foreground mb-12 max-w-[900px]">
            {t("tealeaf.title")}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.role")}</h4>
              <p className="font-sans text-[15px] text-foreground">UX Lead & Analyst</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.timeline")}</h4>
              <p className="font-sans text-[15px] text-foreground">{language === 'es' ? '4 Meses' : '4 Months'}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.team")}</h4>
              <p className="font-sans text-[15px] text-foreground">{language === 'es' ? 'Devs, Marketing, UX' : 'Devs, Marketing, UX'}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.platform")}</h4>
              <p className="font-sans text-[15px] text-foreground">E-commerce Web</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-32"
      >
        <div className="aspect-[21/9] w-full bg-muted overflow-hidden rounded-[12px]">
          <img src={image_99371886733eaf7139ac856f26a05cf8b5c1505c} alt={t("tealeaf.title")} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Content with TOC */}
      <CaseStudyLayout sections={sections}>
        <div className="space-y-32">
          
          {/* 01 Summary */}
          <section>
            <SectionHeader 
              id="summary" 
              number="01" 
              title={t("case.toc.summary")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed mb-12">
              {t("tealeaf.summary")}
            </p>
            <MetricCards metrics={summaryMetrics} />
          </section>

          {/* 02 Context */}
          <section>
            <SectionHeader 
              id="context" 
              number="02" 
              title={t("case.toc.context")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("tealeaf.context")}
            </p>
          </section>

          {/* 03 Role */}
          <section>
            <SectionHeader 
              id="role" 
              number="03" 
              title={t("case.toc.role")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("tealeaf.role")}
            </p>
          </section>

          {/* 04 Research */}
          <section>
            <SectionHeader 
              id="research" 
              number="04" 
              title={t("case.toc.research")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("tealeaf.research")}
            </p>
          </section>

          {/* 05 Strategy */}
          <section>
            <SectionHeader 
              id="strategy" 
              number="05" 
              title={t("case.toc.strategy")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("tealeaf.strategy")}
            </p>
          </section>

          {/* 06 Key Decisions */}
          <section>
            <SectionHeader 
              id="design" 
              number="06" 
              title={t("case.toc.design")}
            />
            <div className="space-y-8">
              <DecisionBlock
                title={t("tealeaf.decision1.title")}
                problem={t("tealeaf.decision1.problem")}
                change={t("tealeaf.decision1.change")}
                outcome={t("tealeaf.decision1.outcome")}
              />
              <DecisionBlock
                title={t("tealeaf.decision2.title")}
                problem={t("tealeaf.decision2.problem")}
                change={t("tealeaf.decision2.change")}
                outcome={t("tealeaf.decision2.outcome")}
              />
              <DecisionBlock
                title={t("tealeaf.decision3.title")}
                problem={t("tealeaf.decision3.problem")}
                change={t("tealeaf.decision3.change")}
                outcome={t("tealeaf.decision3.outcome")}
              />
            </div>
          </section>

          {/* 07 Impact */}
          <section>
            <SectionHeader 
              id="impact" 
              number="07" 
              title={t("case.toc.impact")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed mb-12">
              {t("tealeaf.impact")}
            </p>
            <MetricCards metrics={summaryMetrics} />
          </section>

          {/* 08 Reflection */}
          <section>
            <SectionHeader 
              id="reflection" 
              number="08" 
              title={t("case.toc.reflection")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("tealeaf.reflection")}
            </p>
          </section>

        </div>
      </CaseStudyLayout>
    </article>
  );
}
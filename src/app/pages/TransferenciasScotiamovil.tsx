import image_fcb6abf83a47533cc8abfbc27c2920f2383794bd from 'figma:asset/fcb6abf83a47533cc8abfbc27c2920f2383794bd.png'
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CaseStudyLayout } from "../components/case-study/CaseStudyLayout";
import { SectionHeader } from "../components/case-study/SectionHeader";
import { MetricCards } from "../components/case-study/MetricCards";
import { DecisionBlock } from "../components/case-study/DecisionBlock";
import { ResearchCarousel } from "../components/ResearchCarousel";
import transfersSectionImage from "figma:asset/63eb12f9f58493196f8a1e3f28c2a2cc4517ae35.png";
import researchImage1 from "figma:asset/f9793c6b66ad2331b161b89a0fc323648b68275b.png";
import researchImage2 from "figma:asset/fa4ec0a1a28a146b00b67c5be0c4d09106db53f4.png";
import researchImage3 from "figma:asset/8b7d4987b34aef8181858d604ffe66c0bd12da0f.png";
import minutesImage from "figma:asset/0310ff8f0d448933c07d8ca82486808038ff607b.png";
import singleImage from "figma:asset/286b04ed20a145768cfffe31fea9dfa7d0dc0450.png";
import listImage from "figma:asset/f2ad4dfdd87a0a2ba58133106f0eff1ea98d97d0.png";

export function TransferenciasScotiamovil() {
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
    { value: "35 → 2 min", label: language === 'es' ? "Tiempo de flujo" : "Flow Time" },
    { value: "+32%", label: language === 'es' ? "Transaccionalidad" : "Transactionality" },
    { value: "+2.7 pts", label: "NPS" },
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
            {t("transfer.title")}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.role")}</h4>
              <p className="font-sans text-[15px] text-foreground">UX Senior Manager</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.timeline")}</h4>
              <p className="font-sans text-[15px] text-foreground">{language === 'es' ? '6 Meses' : '6 Months'}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.team")}</h4>
              <p className="font-sans text-[15px] text-foreground">{language === 'es' ? 'PM, Devs, UX/UI, Research' : 'PM, Devs, UX/UI, Research'}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.platform")}</h4>
              <p className="font-sans text-[15px] text-foreground">iOS, Android</p>
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
          <img src={image_fcb6abf83a47533cc8abfbc27c2920f2383794bd} alt={t("transfer.title")} className="w-full h-full object-cover" />
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
              {t("transfer.summary")}
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
              {t("transfer.context")}
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
              {t("transfer.role")}
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
              {t("transfer.research")}
            </p>
            <ResearchCarousel 
              images={[
                { src: researchImage1, alt: language === 'es' ? 'Hallazgos de investigación 1' : 'Research findings 1' },
                { src: researchImage2, alt: language === 'es' ? 'Hallazgos de investigación 2' : 'Research findings 2' },
                { src: researchImage3, alt: language === 'es' ? 'Hallazgos de investigación 3' : 'Research findings 3' }
              ]} 
            />
          </section>

          {/* 05 Strategy */}
          <section>
            <SectionHeader 
              id="strategy" 
              number="05" 
              title={t("case.toc.strategy")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("transfer.strategy")}
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
                title={t("transfer.decision1.title")}
                problem={t("transfer.decision1.problem")}
                change={t("transfer.decision1.change")}
                outcome={t("transfer.decision1.outcome")}
                image={singleImage}
              />
              <DecisionBlock
                title={t("transfer.decision2.title")}
                problem={t("transfer.decision2.problem")}
                change={t("transfer.decision2.change")}
                outcome={t("transfer.decision2.outcome")}
                image={listImage}
              />
              <DecisionBlock
                title={t("transfer.decision3.title")}
                problem={t("transfer.decision3.problem")}
                change={t("transfer.decision3.change")}
                outcome={t("transfer.decision3.outcome")}
                image={minutesImage}
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
              {t("transfer.impact")}
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
              {t("transfer.reflection")}
            </p>
          </section>

        </div>
      </CaseStudyLayout>
    </article>
  );
}
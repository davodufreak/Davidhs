import image_3a6e46bbe2c86cec357d1c72da1f3b17cb07d1e9 from 'figma:asset/3a6e46bbe2c86cec357d1c72da1f3b17cb07d1e9.png'
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CaseStudyLayout } from "../components/case-study/CaseStudyLayout";
import { SectionHeader } from "../components/case-study/SectionHeader";
import { MetricCards } from "../components/case-study/MetricCards";
import { DecisionBlock } from "../components/case-study/DecisionBlock";
import { ExpandableImage } from "../components/ExpandableImage";
import cardsSectionImage from "figma:asset/dacff583204037bef211144ed36f7e927e2f6a90.png";
import customerJourneyImage from "figma:asset/b6412a19bf29165b06307dcb61720a7cd2691994.png";
import activationImage from "figma:asset/bfbb6a9ac631cef9ab5cdbacb81e4e7ce6a1d866.png";
import offImage from "figma:asset/3b55766d66b160f0ff18b2e0f920c14c42053ff0.png";
import cvvImage from "figma:asset/4452b16af005ed85b5fa5b7735546296afad8c40.png";
import pinImage from "figma:asset/239b56f4d19012cc2e30c144246d67988bc11a12.png";
import requestImage from "figma:asset/926de591bd645fdd86ae3da0ec6d12d5b3e0abb6.png";
import limitImage from "figma:asset/3819f473105593def41e13ed6b64c6792d3cde9a.png";

export function ScotiaTarjetas() {
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
    { value: "5M MXN", label: language === 'es' ? "Ahorro anual" : "Annual Savings" },
    { value: "+2.6 pts", label: "NPS" },
    { value: "+40K", label: language === 'es' ? "Adopción de app" : "App Adoption" },
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
            {t("scotia.title")}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.role")}</h4>
              <p className="font-sans text-[15px] text-foreground">UX Senior Manager</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.timeline")}</h4>
              <p className="font-sans text-[15px] text-foreground">{language === 'es' ? '8 Meses' : '8 Months'}</p>
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
          <img src={image_3a6e46bbe2c86cec357d1c72da1f3b17cb07d1e9} alt={t("scotia.title")} className="w-full h-full object-cover" />
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
              <div dangerouslySetInnerHTML={{ __html: t("scotia.summary") }} />
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
               <div dangerouslySetInnerHTML={{ __html: t("scotia.context") }} />
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
              {t("scotia.role")}
            </p>
          </section>

          {/* 04 Research */}
          <section>
            <SectionHeader 
              id="research" 
              number="04" 
              title={t("case.toc.research")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed mb-8">
              {t("scotia.research")}
            </p>
            
            {/* Customer Journey Map Image */}
            <div className="mt-8">
              <ExpandableImage 
                src={customerJourneyImage} 
                alt={language === 'es' ? 'Mapa de viaje del cliente - TDC Preaprobado' : 'Customer Journey Map - Pre-approved Credit Card'}
              />
            </div>
          </section>

          {/* 05 Strategy */}
          <section>
            <SectionHeader 
              id="strategy" 
              number="05" 
              title={t("case.toc.strategy")}
            />
            <p className="text-lg text-foreground/80 font-sans leading-relaxed">
              {t("scotia.strategy")}
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
                title={t("scotia.decision1.title")}
                problem={t("scotia.decision1.problem")}
                change={t("scotia.decision1.change")}
                outcome={t("scotia.decision1.outcome")}
                image={activationImage}
              />
              <DecisionBlock
                title={t("scotia.decision2.title")}
                problem={t("scotia.decision2.problem")}
                change={t("scotia.decision2.change")}
                outcome={t("scotia.decision2.outcome")}
                image={offImage}
              />
              <DecisionBlock
                title={t("scotia.decision3.title")}
                problem={t("scotia.decision3.problem")}
                change={t("scotia.decision3.change")}
                outcome={t("scotia.decision3.outcome")}
                image={cvvImage}
              />
              <DecisionBlock
                title={t("scotia.decision4.title")}
                problem={t("scotia.decision4.problem")}
                change={t("scotia.decision4.change")}
                outcome={t("scotia.decision4.outcome")}
                image={pinImage}
              />
              <DecisionBlock
                title={t("scotia.decision5.title")}
                problem={t("scotia.decision5.problem")}
                change={t("scotia.decision5.change")}
                outcome={t("scotia.decision5.outcome")}
                image={requestImage}
              />
              <DecisionBlock
                title={t("scotia.decision6.title")}
                problem={t("scotia.decision6.problem")}
                change={t("scotia.decision6.change")}
                outcome={t("scotia.decision6.outcome")}
                image={limitImage}
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
              {t("scotia.impact")}
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
              {t("scotia.reflection")}
            </p>
          </section>

        </div>
      </CaseStudyLayout>
    </article>
  );
}
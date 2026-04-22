import { motion } from "motion/react";
import { Link, useParams, Navigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function CaseStudy() {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  const caseStudiesData = {
    "banca-digital": {
      title: t("home.banca.title"),
      heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc3NDA0MjE2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      role: language === 'es' ? "UX Senior Manager" : "UX Senior Manager",
      timeline: language === 'es' ? "8 Meses" : "8 Months",
      team: language === 'es' ? "Product Manager, Devs iOS/Android, UX/UI, Research" : "Product Manager, iOS/Android Devs, UX/UI, Research",
      platform: "iOS, Android, Web App",
      problem: language === 'es' ? "Los nuevos usuarios experimentaban una fricción significativa durante el proceso de incorporación, lo que resultaba en altas tasas de abandono antes de la activación de la cuenta. Además, la arquitectura de información existente dificultaba encontrar y ejecutar funciones financieras clave rápidamente." : "New users experienced significant friction during the onboarding process, resulting in high drop-off rates before account activation. Additionally, the existing information architecture made it difficult to find and execute key financial functions quickly.",
      approach: language === 'es' ? "Iniciamos un análisis completo de la causa raíz que incluyó pruebas de usabilidad y entrevistas en profundidad. La percepción principal fue que la sobrecarga de información y la jerga financiera técnica estaban alienando a los nuevos clientes. Propusimos un rediseño desde cero centrado en la divulgación progresiva." : "We initiated a complete root-cause analysis involving usability testing and deep-dive interviews. The primary insight was that information overload and technical financial jargon were alienating new customers. We proposed a ground-up redesign focusing on progressive disclosure.",
      decisions: language === 'es' ? [
        "Se eliminaron pasos redundantes del flujo de registro empujando la validación KYC a una etapa posterior no bloqueante.",
        "Se rediseñó el sistema de navegación principal para priorizar las 3 transacciones diarias principales, identificadas a través de datos analíticos.",
        "Se reescribió todo el texto de la interfaz para establecer un tono conversacional y de creación de confianza en lugar de uno puramente transaccional."
      ] : [
        "Removed redundant steps from the registration flow by pushing KYC validation to a later, non-blocking stage.",
        "Redesigned the primary navigation system to prioritize the top 3 daily transactions, identified via analytical data.",
        "Rewrote all interface copy to establish a conversational, trust-building tone rather than a purely transactional one."
      ],
      outcomes: language === 'es' ? "Al simplificar el lenguaje y el flujo, redujimos drásticamente la carga cognitiva. La nueva experiencia disminuyó significativamente los tiempos de registro y generó confianza inmediata con el usuario, lo que resultó en un aumento medible de la interacción activa diaria." : "By simplifying the language and the flow, we drastically reduced cognitive load. The new experience significantly lowered registration times and built immediate trust with the user, resulting in a measurable increase in daily active engagement.",
      metrics: [
        { stat: "-30%", label: language === 'es' ? "Tiempo de Incorporación" : "Onboarding Time" },
        { stat: "+25%", label: language === 'es' ? "Tasa de Adopción" : "Adoption Rate" },
        { stat: "90%", label: language === 'es' ? "Puntaje CSAT" : "CSAT Score" }
      ],
      nextSlug: "fintech-ecommerce",
      nextTitle: t("home.fintech.title")
    },
    "fintech-ecommerce": {
      title: t("home.fintech.title"),
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2UlMjBjaGVja291dHxlbnwxfHx8fDE3NzQwNDIxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      role: "UX/UI Lead",
      timeline: language === 'es' ? "6 Meses" : "6 Months",
      team: "1 PM, 4 Engineers, 2 Designers",
      platform: "Web App & Mobile Web",
      problem: language === 'es' ? "Los usuarios abandonaban los carritos de compras en el último paso. El análisis mostró que el flujo de pago de 5 pasos pedía información redundante y los usuarios estaban muy confundidos con respecto a las opciones de financiamiento a plazos." : "Users were abandoning shopping carts at the very last step. Analysis showed the 5-step checkout flow asked for redundant information, and users were highly confused regarding installment financing options.",
      approach: language === 'es' ? "Mapeamos los embudos analíticos y ejecutamos pruebas A/B en wireframes de baja fidelidad. La estrategia fue comprimir el flujo de pago y exponer las opciones de financiamiento de manera transparente sin requerir clics adicionales." : "We mapped the analytics funnels and ran A/B tests on low-fidelity wireframes. The strategy was to compress the payment flow and expose the financing options transparently without requiring extra clicks.",
      decisions: language === 'es' ? [
        "Se consolidó el proceso de 5 pasos en un diseño de Checkout de una sola página.",
        "Se implementaron validaciones en línea en tiempo real para evitar errores de envío y reducir la frustración.",
        "Se crearon componentes de interfaz de usuario altamente legibles para planes de 'meses sin intereses', reemplazando bloques masivos de texto con selectores claros y plegables."
      ] : [
        "Consolidated the 5-step process into a single One-Page Checkout layout.",
        "Implemented real-time inline validations to prevent submission errors and reduce frustration.",
        "Created highly legible UI components for 'months without interest' plans, replacing massive blocks of text with clear, collapsible selectors."
      ],
      outcomes: language === 'es' ? "La reducción de campos del formulario mejoró instantáneamente la conversión. Presentar las opciones de financiamiento de forma limpia alentó a los usuarios a optar por artículos de mayor precio, lo que aumentó el tamaño promedio del ticket mientras redujo el tiempo de pago a la mitad." : "Reducing form fields instantly improved conversion. Presenting financing options cleanly encouraged users to opt for higher-priced items, thereby increasing the average ticket size while cutting checkout time in half.",
      metrics: [
        { stat: "-40%", label: language === 'es' ? "Abandono de Carrito" : "Cart Abandonment" },
        { stat: "+15%", label: language === 'es' ? "Ticket Promedio" : "Average Ticket" },
        { stat: "2x", label: language === 'es' ? "Velocidad de Pago" : "Checkout Speed" }
      ],
      nextSlug: "marketing-digital",
      nextTitle: t("home.marketing.title")
    },
    "marketing-digital": {
      title: t("home.marketing.title"),
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzczOTk5OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      role: language === 'es' ? "Director Creativo y UX" : "Creative & UX Director",
      timeline: language === 'es' ? "12 Meses" : "12 Months",
      team: "Design, Front-end, QA",
      platform: "Desktop Web App",
      problem: language === 'es' ? "El equipo de ingeniería perdió un tiempo considerable recreando componentes de la interfaz de usuario desde cero. La plataforma de marketing mostró graves inconsistencias visuales, lo que dañó la percepción de calidad para los clientes empresariales B2B." : "The engineering team wasted considerable time recreating UI components from scratch. The marketing platform exhibited severe visual inconsistencies, which damaged the perception of quality for B2B enterprise clients.",
      approach: language === 'es' ? "Llevé a cabo un inventario completo de la interfaz de usuario, descubriendo 12 estilos de botones diferentes y un uso caótico del color. Entrevisté a los desarrolladores para comprender las limitaciones técnicas y abogué por un sistema de diseño basado en React." : "Conducted a comprehensive UI inventory, discovering 12 different button styles and chaotic color usage. Interviewed developers to understand technical constraints and advocated for a React-based Design System.",
      decisions: language === 'es' ? [
        "Se diseñó una biblioteca de componentes atómicos escalable en Figma directamente vinculada a Storybook.",
        "Se rediseñó el panel de usuario principal simultáneamente para probar la flexibilidad de los nuevos componentes.",
        "Se documentaron los tokens de diseño y 'el por qué' detrás de las decisiones, lo que empoderó a los desarrolladores para construir de forma autónoma."
      ] : [
        "Architected a scalable, atomic component library in Figma directly linked to Storybook.",
        "Redesigned the primary user dashboard concurrently to stress-test the flexibility of the new components.",
        "Documented design tokens and 'the why' behind decisions, empowering developers to build autonomously."
      ],
      outcomes: language === 'es' ? "El sistema de diseño funcionó como un producto independiente. No solo alineó el lenguaje visual en toda la plataforma, sino que también redujo drásticamente el CSS personalizado y aceleró el tiempo de comercialización para nuevas funciones." : "The Design System functioned as a standalone product. It not only aligned the visual language across the platform but also drastically reduced custom CSS and accelerated the time-to-market for new features.",
      metrics: [
        { stat: "+50%", label: language === 'es' ? "Eficiencia de Diseño" : "Design Efficiency" },
        { stat: "-35%", label: language === 'es' ? "Deuda Técnica" : "Technical Debt" },
        { stat: "100%", label: language === 'es' ? "Consistencia Visual" : "Visual Consistency" }
      ],
      nextSlug: "banca-digital",
      nextTitle: t("home.banca.title")
    }
  };

  if (!slug || !caseStudiesData[slug as keyof typeof caseStudiesData]) {
    return <Navigate to="/work" replace />;
  }

  const project = caseStudiesData[slug as keyof typeof caseStudiesData];

  return (
    <article className="w-full bg-background pt-12 pb-32">
      {/* Back Link */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 mb-12">
        <Link to="/work" className="inline-flex items-center text-muted-foreground hover:text-foreground font-sans text-sm tracking-widest uppercase transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          {t("case.back")}
        </Link>
      </div>

      {/* Hero Header */}
      <header className="max-w-[1000px] mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-[72px] font-serif leading-[1.1] text-foreground mb-12">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border">
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.role")}</h4>
              <p className="font-sans text-[15px] text-foreground">{project.role}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.timeline")}</h4>
              <p className="font-sans text-[15px] text-foreground">{project.timeline}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.team")}</h4>
              <p className="font-sans text-[15px] text-foreground">{project.team}</p>
            </div>
            <div>
              <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2">{t("case.platform")}</h4>
              <p className="font-sans text-[15px] text-foreground">{project.platform}</p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-[1440px] mx-auto px-6 md:px-12 mb-32"
      >
        <div className="aspect-[21/9] w-full bg-muted overflow-hidden rounded-[12px]">
          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 space-y-32">
        
        {/* Context & Problem */}
        <section>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">{t("case.context")}</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Approach */}
        <section>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">{t("case.approach")}</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
            {project.approach}
          </p>
        </section>

        {/* Key Decisions */}
        <section>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">{t("case.decisions")}</h2>
          <ul className="space-y-6">
            {project.decisions.map((decision, i) => (
              <li key={i} className="flex gap-6 items-start">
                <span className="text-accent font-serif text-2xl font-bold">0{i+1}</span>
                <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">{decision}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcomes & Metrics */}
        <section className="bg-foreground text-background p-12 md:p-16 -mx-6 md:-mx-12 lg:mx-0 lg:rounded-none">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">{t("case.outcomes")}</h2>
          <p className="text-lg md:text-xl font-sans leading-relaxed mb-16 opacity-90">
            {project.outcomes}
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 border-t border-background/20 pt-12">
            {project.metrics.map((metric, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-serif mb-4">{metric.stat}</div>
                <div className="font-sans text-[15px] uppercase tracking-widest opacity-70">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project */}
        <div className="pt-16 border-t border-border">
          <span className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4 block">{t("case.next")}</span>
          <Link to={`/work/${project.nextSlug}`} className="group inline-flex items-center text-3xl md:text-5xl font-serif text-foreground hover:text-accent transition-colors">
            {project.nextTitle}
            <ArrowRight className="ml-6 w-8 h-8 transform group-hover:translate-x-4 transition-transform duration-500" />
          </Link>
        </div>

      </div>
    </article>
  );
}
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (
    key: string,
    options?: { returnObjects?: boolean },
  ) => any;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.work": "Work",
    "nav.about": "About",
    "nav.leadership": "Leadership",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "nav.downloadResume": "Resume",

    // Home
    "home.hero.titlePart1": "Creating digital products.",
    "home.hero.titlePart2": " Guiding the teams behind them.",
    "home.hero.subtitle":
      "Insight into people earns trust and fuels business succes.",
    "home.hero.selectedWork": "View case studies",
    "home.hero.contact": "Contact",
    "home.featured.title": "Featured Case Studies",
    "home.project.readCaseStudy": "Read Case Study",

    // Case Study
    "case.back": "Back to Work",
    "case.role": "Role",
    "case.timeline": "Timeline",
    "case.team": "Team",
    "case.platform": "Platform",
    "case.context": "Context & Problem",
    "case.approach": "The Approach",
    "case.decisions": "Key Decisions",
    "case.outcomes": "Outcomes",
    "case.next": "Next Case Study",

    // Case Study TOC
    "case.toc.summary": "Summary",
    "case.toc.context": "Context & Problem",
    "case.toc.role": "Role & Scope",
    "case.toc.research": "Research & Findings",
    "case.toc.strategy": "Strategy",
    "case.toc.design": "Key Decisions & Design",
    "case.toc.impact": "Impact",
    "case.toc.reflection": "Reflection",

    // Scotia Tarjetas
    "scotia.title": "Cards Experience Unification",
    "scotia.summary":
      "I unified two credit card apps into one experience, reducing costs, improving NPS, and simplifying the bank’s digital strategy.",
    "scotia.context":
      "Scotiabank operated two separate apps for credit card management. These apps didn’t communicate with each other. This created several problems: <br> <ul><li>&bull; Double operational costs</li><li>&bull; Customer confusion</li><li>&bull; Separate credentials</li><li>&bull; Frequent user lockouts</li><li>&bull; Increased contact center calls</li><li>&bull; Negative impact on NPS</li></ul><br><p>This wasn’t just a technical problem. <strong>It was both a product and experience challenge.</strong></p>",
    "scotia.role":
      "Led strategy, prioritization, and redesign of card experiences.",
    "scotia.research":
      "Review of surveys + interviews with customers. Goal: understand needs/expectations about card usage.",
    "scotia.strategy":
      "Consolidate critical experiences within the main app. Focus on self-service, security, and card control.",
    "scotia.decision1.title": "Card Activation",
    "scotia.decision1.problem":
      "Users had to call the contact center or use a separate app to activate new cards.",
    "scotia.decision1.change":
      "Built in-app card activation flow with PIN setup in one seamless experience.",
    "scotia.decision1.outcome":
      "Reduced contact center calls by 23% and improved activation rate by 35%.",
    "scotia.decision2.title":
      "Card On/Off for Primary and Additional Cards",
    "scotia.decision2.problem":
      "No self-service option to temporarily lock/unlock cards for security.",
    "scotia.decision2.change":
      "Introduced toggle controls for primary and additional cards directly in the app.",
    "scotia.decision2.outcome":
      "Increased user confidence in security features, +18% engagement with card management.",
    "scotia.decision3.title": "Dynamic CVV",
    "scotia.decision3.problem":
      "Static CVV posed security risks for frequent online shoppers.",
    "scotia.decision3.change":
      "Implemented dynamic CVV generation within the app, refreshing every 30 seconds.",
    "scotia.decision3.outcome":
      "Enhanced security perception, zero reported fraud incidents post-launch.",
    "scotia.decision4.title": "PIN Consultation",
    "scotia.decision4.problem":
      "Users forgot PINs and had to visit branches or call support.",
    "scotia.decision4.change":
      "Added secure in-app PIN retrieval with biometric authentication.",
    "scotia.decision4.outcome":
      "Reduced branch visits for PIN resets by 40%.",
    "scotia.decision5.title": "Request Additional Card",
    "scotia.decision5.problem":
      "Requesting additional cards required phone calls or branch visits.",
    "scotia.decision5.change":
      "Designed streamlined in-app flow for requesting and tracking additional cards.",
    "scotia.decision5.outcome":
      "Increased additional card requests by 28%, reduced processing time by 50%.",
    "scotia.decision6.title":
      "Manage Additional Card with Usage Limits",
    "scotia.decision6.problem":
      "No way to set spending limits on additional cards, causing budget control issues.",
    "scotia.decision6.change":
      "Built granular controls for setting daily/monthly limits on additional cards.",
    "scotia.decision6.outcome":
      "Improved user control and satisfaction, +15% positive feedback on card management.",
    "scotia.impact":
      "Annual savings of 5M MXN. +2.6 pts NPS. +40K main app adoption (single-product customers).",
    "scotia.reflection":
      "Learned the importance of platform consolidation in reducing friction and operational costs. Empowering users with self-service features not only improves satisfaction but also drives significant cost savings.",

    // Tealeaf Essity
    "tealeaf.title": "Tealeaf with Essity",
    "tealeaf.summary":
      "I led the implementation of Tealeaf (analytics and session replay) for the Tena e-commerce, uncovering experience friction and identifying a critical payment gateway bug. By combining UX optimizations, technical fixes, and behavior-based automation, the initiative drove a +3% increase in annual sales and was later scaled to Regio and Saba with similar results.",
    "tealeaf.context":
      "Need for real visibility of sessions and funnel drop-offs in e-commerce.",
    "tealeaf.role":
      "Led implementation, instrumentation, and initial analyses; consulting to development teams.",
    "tealeaf.research":
      "Replicated and analyzed real sessions (session replay). Detected UX frictions and a payment bug.",
    "tealeaf.strategy":
      "Combine UX optimization + technical correction + automated marketing intervention based on funnel signals.",
    "tealeaf.decision1.title":
      "Payment Gateway Diagnosis and Correction",
    "tealeaf.decision1.problem":
      "Users were dropping off at the final payment step without clear error messages.",
    "tealeaf.decision1.change":
      "Used session replays to identify a critical bug in the payment gateway integration.",
    "tealeaf.decision1.outcome":
      "Fixed the bug, reducing payment failures by 18%.",
    "tealeaf.decision2.title":
      "Usability Recommendations to Development",
    "tealeaf.decision2.problem":
      "High friction points in the checkout flow, including unclear CTAs and form validation issues.",
    "tealeaf.decision2.change":
      "Provided data-driven UX recommendations, including clearer error messages and streamlined form fields.",
    "tealeaf.decision2.outcome":
      "Improved checkout completion rate by 12%.",
    "tealeaf.decision3.title":
      "Marketing Automation: Cart Recovery",
    "tealeaf.decision3.problem":
      "High cart abandonment with no recovery mechanism in place.",
    "tealeaf.decision3.change":
      "Implemented automated email campaigns triggered by funnel drop-off signals, featuring one-click cart recovery.",
    "tealeaf.decision3.outcome":
      "Recovered 8% of abandoned carts, contributing to overall sales increase.",
    "tealeaf.impact":
      "+3% annual sales. Scaled to Regio and Tena with similar benefits.",
    "tealeaf.reflection":
      "Having real session evidence transformed decision-making. Instead of assumptions, we could pinpoint exact friction points and address them with surgical precision.",

    // Transferencias ScotiaMóvil
    "transfer.title": "Transfers Redesign in ScotiaMóvil",
    "transfer.summary":
      "In ScotiaMóvil, sending money used to take a significant amount of time. I led the end-to-end redesign of transfers, significantly reducing the process duration, increasing transactionality, raising NPS, and benefiting a large number of users.",
    "transfer.context":
      "Imagine needing to send money to a new contact and being forced to wait 30 minutes before the bank lets you proceed. The old ScotiaMóvil flow required you to fill endless fields, guess the destination bank and even register every recipient as frequent. When it came time to choose which account to use, a list of anonymous balances left you confused. These frictions weren’t just technical; they eroded trust and blocked people from sending money",
    "transfer.role":
      "As the product strategist and designer, I defined the problems to attack, prioritised the initiatives, and personally redesigned the end‑to‑end transfer flow.",
    "transfer.research":
      "To understand where users were struggling, analysed NPS surveys and then interviewed heavy users through early testing with a rough prototype. These conversations confirmed that the wait time, the unwieldy form and the ambiguous account selector were the biggest pain points.",
    "transfer.strategy":
      "My strategy was clear: remove waiting times, streamline the form and align the transfer pattern with our newly redesigned Home. By making transfers consistent with Home, we created a pattern that would scale across the app.",
    "transfer.decision1.title":
      "1. Remove the 30-Minute Wait After Adding a Recipient",
    "transfer.decision1.problem":
      "After adding a new recipient, users were forced to wait 30 minutes before sending money. This regulatory safeguard created friction, confusion, and drop-offs in a moment where users expected immediacy.",
    "transfer.decision1.change":
      "I partnered with risk, compliance, and engineering teams to remove the wait time by implementing real-time validations and background security checks. To support the operational change aligned with Banxico regulations, I introduced a clear communication strategy that framed the update as a user benefit and built trust around the new experience.",
    "transfer.decision1.outcome":
      "97% adoption rate. Over 1 million active users benefited. Transfers became immediate, removing the biggest friction point in the experience.",
    "transfer.decision2.title":
      "2. Single Input Field for Recipient Information",
    "transfer.decision2.problem":
      "Adding a new recipient required multiple fields and manual selection of bank and account type. This increased cognitive load, slowed the process, and led to frequent errors.",
    "transfer.decision2.change":
      "I introduced a single input field where users could enter any recipient identifier — phone number, CLABE, or debit card. The system automatically detected the input type, identified the destination bank, and in some cases surfaced the recipient’s name.",
    "transfer.decision2.outcome":
      "Reduced friction and cognitive load. Faster recipient creation and fewer errors, making transfers feel instant and effortless.",
    "transfer.decision3.title":
      "3. Visual Indicators for Recurring Transfers",
    "transfer.decision3.problem":
      "Users struggled to quickly identify recipients during recurring transfers. Similar names and lack of visual cues increased decision time and selection errors.",
    "transfer.decision3.change":
      "I introduced visual identifiers including bank logos, recipient aliases, and a dedicated 'frequent recipients' section. These cues improved recognition and reduced decision effort.",
    "transfer.decision3.outcome":
      "Faster recurring transfers and improved confidence when selecting recipients. The change contributed to further reducing overall transfer time.",
    "transfer.impact":
      "Total time: ~35 min → ~2 min. >1M users benefited. +32% transactionality. +2.7 pts NPS.",
    "transfer.reflection":
      "This project reinforced the value of reducing cognitive load and designing reusable patterns. Aligning with the Home redesign ensured consistency and scalability across the platform.",

    // Footer
    "footer.title": "Let's build something significant.",
    "footer.ats": "ATS Resume",
    "footer.rights": "David Hurtado. All rights reserved.",

    // About
    "about.title.part1": "I design how things ",
    "about.title.part2": "make sense.",
    "about.p1":
      "Hi, I’m David. I lead UX Design at Scotiabank Mexico. I design products that connect user needs with business impact—at scale.",
    "about.p2":
      "I’ve driven over $3M USD in savings through product strategy, increased annual revenue by 3% through data-informed design, and built teams that consistently deliver with precision and efficiency.",
    "about.p3":
      "My work sits at the intersection of design, product, and decision-making. I focus on clarity, alignment, and outcomes.",
    "about.p4":
      "Lately, I’ve been exploring how AI can reshape the design process—experimenting with new workflows and building an independent validation studio to test ideas faster.",
    "about.p5":
      "Outside of work, I’m into films, graphic novels, food, and travel. Always open to meaningful conversations.",
    "about.coreFocus": "Core Focus",
    "about.focus1": "Product Strategy",
    "about.focus2": "UX/UI Leadership",
    "about.focus3": "Continuous Discovery",
    "about.focus4": "Design Systems",
    "about.certifications": "Certifications",
    "about.cert1": "Digital Product Management",
    "about.cert2": "Product Strategy",
    "about.cert3": "Customer Centricity",
    "about.cta": "Get in touch",

    // Leadership
    "leadership.badge": "People & Process",
    "leadership.title":
      "Designing the environment where design happens.",
    "leadership.subtitle":
      "With over 4 years of experience leading multidisciplinary UX teams, my approach focuses on talent management, continuous experimentation, and treating the design team as my most important user.",
    "leadership.p1.title": "Psychological Safety First",
    "leadership.p1.desc":
      "Creating an environment where designers feel safe sharing early-stage ideas and providing constructive feedback. High-trust teams move faster and innovate better.",
    "leadership.p2.title": "Design Ops & Tooling",
    "leadership.p2.desc":
      "Applying UX principles to our internal processes. Optimizing workflows, establishing clear conventions, and automating repetitive tasks.",
    "leadership.p3.title": "Cross-Functional Empathy",
    "leadership.p3.desc":
      "Bridging the gap between engineering, product, and design. Fostering mutual understanding to align realistic timelines and shared objectives.",
    "leadership.p4.title": "Growth & Mentorship",
    "leadership.p4.desc":
      "Tailoring career paths for each team member. Conducting regular 1:1s focused on long-term goals rather than just project status updates.",
    "leadership.quote":
      '"David has a unique ability to balance business needs with an impeccable user experience. His mentorship completely changed my career trajectory."',
    "leadership.quoteAuthor": "— Senior UX Designer",
    "leadership.testimonial1.text":
      "Dave has been one of the best managers I've worked with. His constant feedback and the challenges he gave me have truly helped me grow as a professional.",
    "leadership.testimonial1.name": "Mariana Cuevas",
    "leadership.testimonial1.role": "Sr. Product Designer",
    "leadership.testimonial2.text":
      "David always seeks to boost the talent and visibility of the team. He constantly generates opportunities where everyone can shine on their own merits.",
    "leadership.testimonial2.name": "Rose Moyers",
    "leadership.testimonial2.role": "UX Researcher",
    "leadership.testimonial3.text":
      "David is amazing. He has successfully guided the team through transformation processes and helped implement best practices. The elevation of the team's craft and the results obtained speak for themselves.",
    "leadership.testimonial3.name": "Humberto Torres IB",
    "leadership.testimonial3.role": "Product Design Director",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Let's connect.",
    "contact.subtitle":
      "I am open to new opportunities, leading teams, and defining strategies where creativity converges with business goals.",
    "contact.emailCTA": "Send an email",
    "contact.location": "Location",
    "contact.locationVal1": "Mexico City, Mexico",
    "contact.locationVal2": "(Open to Remote)",
    "contact.phone": "Phone",
    "contact.social": "Social",
    "contact.linkedin": "LinkedIn Profile",

    // ATS CV
    "cv.title": "David Hurtado Santiago",
    "cv.subtitle":
      "UX Senior Manager | Product Strategist | People Leader",
    "cv.location": "Mexico City, Mexico",
    "cv.summaryTitle": "Professional Summary",
    "cv.summary":
      "User Experience Designer with over 10 years of experience leading digital initiatives for banking, e-commerce, and technology. Expert in team management, user-centered design, agile methodologies, and product strategy. My approach combines business thinking, creativity, and leadership to build products that generate value and measurable results. Currently leading a team of UX designers at Scotiabank, driving the evolution of customer-centric digital experiences.",
    "cv.expTitle": "Professional Experience",
    "cv.eduTitle": "Education",
    "cv.skillsTitle": "Key Skills",
    "cv.certTitle": "Certifications",
    "cv.langTitle": "Languages",
    "cv.download": "Download PDF Version",
    "cv.present": "Present",
    "cv.skills": [
      "Digital Product Design",
      "UX Team Leadership",
      "Product Strategy",
      "User Research",
      "Agile / SCRUM",
      "Design Thinking",
    ],
    "cv.languages": ["Spanish: Native", "English: C1"],
  },
  es: {
    // Navigation
    "nav.work": "Trabajo",
    "nav.about": "Sobre Mí",
    "nav.leadership": "Liderazgo",
    "nav.contact": "Contacto",
    "nav.resume": "Descargar CV",
    "nav.downloadResume": "Descargar CV",

    // Home
    "home.hero.titlePart1": "Transformo ideas en experiencias",
    "home.hero.titlePart2": "  y guío a los equipos que las crean.",
    "home.hero.subtitle":
      "Al comprender a las personas, construyo confianza y fidelidad que impulsan al negocio.",
    "home.hero.selectedWork": "Ver casos de estudio",
    "home.hero.contact": "Contacto",
    "home.featured.title": "Casos de Estudio Destacados",
    "home.project.readCaseStudy": "Leer Caso de Estudio",

    // Case Study
    "case.back": "Volver a Trabajo",
    "case.role": "Rol",
    "case.timeline": "Duración",
    "case.team": "Equipo",
    "case.platform": "Plataforma",
    "case.context": "Contexto y Problema",
    "case.approach": "El Enfoque",
    "case.decisions": "Decisiones Clave",
    "case.outcomes": "Resultados",
    "case.next": "Siguiente Caso de Estudio",

    // Case Study TOC
    "case.toc.summary": "Resumen",
    "case.toc.context": "Contexto y Problema",
    "case.toc.role": "Rol y Alcance",
    "case.toc.research": "Investigación y Hallazgos",
    "case.toc.strategy": "Estrategia",
    "case.toc.design": "Decisiones Clave y Diseño",
    "case.toc.impact": "Impacto",
    "case.toc.reflection": "Reflexión",

    // Scotia Tarjetas
    "scotia.title": "Unificación de la Experiencia de Tarjetas",
    "scotia.summary":
      "Unifiqué dos aplicaciones de tarjetas de crédito en una sola experiencia, reduciendo costos, mejorando el NPS y simplificando la estrategia digital del banco.",
    "scotia.context":
      "Scotiabank operaba dos aplicaciones separadas para la gestión de tarjetas de crédito. Estas aplicaciones no se comunicaban entre sí. Esto creaba varios problemas: <br> <ul><li>&bull; Costos operativos duplicados</li><li>&bull; Confusión del cliente</li><li>&bull; Credenciales separadas</li><li>&bull; Bloqueos frecuentes de usuarios</li><li>&bull; Aumento de llamadas al centro de contacto</li><li>&bull; Impacto negativo en el NPS</li></ul><br><p>Esto no era solo un problema técnico. <strong>Era tanto un desafío de producto como de experiencia.</strong></p>",
    "scotia.role":
      "Lideré la estrategia, priorización y rediseño de las experiencias de tarjetas.",
    "scotia.research":
      "Revisión de encuestas + entrevistas con clientes. Objetivo: entender las necesidades/expectativas sobre el uso de tarjetas.",
    "scotia.strategy":
      "Consolidar experiencias críticas dentro de la aplicación principal. Enfoque en autoservicio, seguridad y control de tarjetas.",
    "scotia.decision1.title": "Activación de Tarjetas",
    "scotia.decision1.problem":
      "Los usuarios tenían que llamar al centro de contacto o usar una aplicación separada para activar nuevas tarjetas.",
    "scotia.decision1.change":
      "Construí un flujo de activación de tarjetas dentro de la aplicación con configuración de PIN en una experiencia fluida.",
    "scotia.decision1.outcome":
      "Reduje las llamadas al centro de contacto en un 23% y mejoré la tasa de activación en un 35%.",
    "scotia.decision2.title":
      "Encendido/Apagado de Tarjetas Principales y Adicionales",
    "scotia.decision2.problem":
      "No existía opción de autoservicio para bloquear/desbloquear tarjetas temporalmente por seguridad.",
    "scotia.decision2.change":
      "Introduje controles de activación para tarjetas principales y adicionales directamente en la aplicación.",
    "scotia.decision2.outcome":
      "Aumenté la confianza del usuario en las funciones de seguridad, +18% de interacción con la gestión de tarjetas.",
    "scotia.decision3.title": "CVV Dinámico",
    "scotia.decision3.problem":
      "El CVV estático representaba riesgos de seguridad para compradores en línea frecuentes.",
    "scotia.decision3.change":
      "Implementé la generación de CVV dinámico dentro de la aplicación, renovándose cada 30 segundos.",
    "scotia.decision3.outcome":
      "Mejoré la percepción de seguridad, cero incidentes de fraude reportados después del lanzamiento.",
    "scotia.decision4.title": "Consulta de PIN",
    "scotia.decision4.problem":
      "Los usuarios olvidaban sus PINs y tenían que visitar sucursales o llamar a soporte.",
    "scotia.decision4.change":
      "Agregué recuperación segura de PIN dentro de la aplicación con autenticación biométrica.",
    "scotia.decision4.outcome":
      "Reduje las visitas a sucursales para restablecimiento de PIN en un 40%.",
    "scotia.decision5.title": "Solicitar Tarjeta Adicional",
    "scotia.decision5.problem":
      "Solicitar tarjetas adicionales requería llamadas telefónicas o visitas a sucursales.",
    "scotia.decision5.change":
      "Diseñé un flujo simplificado dentro de la aplicación para solicitar y rastrear tarjetas adicionales.",
    "scotia.decision5.outcome":
      "Aumenté las solicitudes de tarjetas adicionales en un 28%, reduje el tiempo de procesamiento en un 50%.",
    "scotia.decision6.title":
      "Gestión de Tarjeta Adicional con Límites de Uso",
    "scotia.decision6.problem":
      "No había forma de establecer límites de gasto en tarjetas adicionales, causando problemas de control presupuestario.",
    "scotia.decision6.change":
      "Construí controles granulares para establecer límites diarios/mensuales en tarjetas adicionales.",
    "scotia.decision6.outcome":
      "Mejoré el control y satisfacción del usuario, +15% de retroalimentación positiva sobre la gestión de tarjetas.",
    "scotia.impact":
      "Ahorros anuales de 5M MXN. +2.6 pts NPS. +40K adopción de la aplicación principal (clientes de un solo producto).",
    "scotia.reflection":
      "Aprendí la importancia de la consolidación de plataformas para reducir la fricción y los costos operativos. Empoderar a los usuarios con funciones de autoservicio no solo mejora la satisfacción, sino que también genera ahorros significativos en costos.",

    // Tealeaf Essity
    "tealeaf.title": "Tealeaf con Essity",
    "tealeaf.summary":
      "Implementé Tealeaf en el e-commerce de Saba, detectando fricciones de experiencia y un bug crítico en la pasarela de pago. Con optimizaciones UX, ajustes técnicos y automatización basada en comportamiento, la iniciativa impulsó un +3% en ventas anuales y luego se escaló a Regio y Tena con resultados similares..",
    "tealeaf.context":
      "Necesidad de visibilidad real de sesiones y caídas en el embudo en comercio electrónico.",
    "tealeaf.role":
      "Lideré la implementación, instrumentación y análisis iniciales; consultoría a equipos de desarrollo.",
    "tealeaf.research":
      "Replicación y análisis de sesiones reales (reproducción de sesiones). Detecté fricciones de UX y un error de pago.",
    "tealeaf.strategy":
      "Combinar optimización de UX + corrección técnica + intervención de marketing automatizada basada en señales del embudo.",
    "tealeaf.decision1.title":
      "Diagnóstico y Corrección de la Pasarela de Pago",
    "tealeaf.decision1.problem":
      "Los usuarios abandonaban en el paso final de pago sin mensajes de error claros.",
    "tealeaf.decision1.change":
      "Utilicé reproducciones de sesiones para identificar un error crítico en la integración de la pasarela de pago.",
    "tealeaf.decision1.outcome":
      "Corregí el error, reduciendo las fallas de pago en un 18%.",
    "tealeaf.decision2.title":
      "Recomendaciones de Usabilidad para Desarrollo",
    "tealeaf.decision2.problem":
      "Puntos de fricción altos en el flujo de pago, incluyendo CTAs poco claros y problemas de validación de formularios.",
    "tealeaf.decision2.change":
      "Proporcioné recomendaciones de UX basadas en datos, incluyendo mensajes de error más claros y campos de formulario simplificados.",
    "tealeaf.decision2.outcome":
      "Mejoré la tasa de finalización de pago en un 12%.",
    "tealeaf.decision3.title":
      "Automatización de Marketing: Recuperación de Carritos",
    "tealeaf.decision3.problem":
      "Alto abandono de carritos sin mecanismo de recuperación implementado.",
    "tealeaf.decision3.change":
      "Implementé campañas de correo electrónico automatizadas activadas por señales de abandono del embudo, con recuperación de carrito de un clic.",
    "tealeaf.decision3.outcome":
      "Recuperé el 8% de carritos abandonados, contribuyendo al aumento general de ventas.",
    "tealeaf.impact":
      "+3% de ventas anuales. Escalado a Regio y Tena con beneficios similares.",
    "tealeaf.reflection":
      "Tener evidencia real de sesiones transformó la toma de decisiones. En lugar de suposiciones, pudimos identificar puntos exactos de fricción y abordarlos con precisión quirúrgica.",

    // Transferencias ScotiaMóvil
    "transfer.title": "Rediseño de Transferencias en ScotiaMóvil",
    "transfer.summary":
      "En ScotiaMóvil, enviar dinero solía tomar una cantidad significativa de tiempo. Lideré el rediseño integral de transferencias, reduciendo significativamente la duración del proceso, aumentando la transaccionalidad, elevando el NPS y beneficiando a un gran número de usuarios.",
    "transfer.context":
      "Imagina necesitar enviar dinero a un nuevo contacto y verte obligado a esperar 30 minutos antes de que el banco te permita continuar. El antiguo flujo de ScotiaMóvil te obligaba a llenar campos interminables, adivinar el banco de destino e incluso registrar a cada destinatario como frecuente. Cuando llegaba el momento de elegir qué cuenta usar, una lista de saldos anónimos te dejaba confundido. Estas fricciones no eran solo técnicas; erosionaban la confianza y bloqueaban a las personas para enviar dinero",
    "transfer.role":
      "Como estratega de producto y diseñador, definí los problemas a atacar, prioricé las iniciativas y rediseñé personalmente el flujo completo de transferencias.",
    "transfer.research":
      "Para entender dónde los usuarios estaban teniendo dificultades, analicé encuestas de NPS y luego entrevisté a usuarios frecuentes mediante pruebas tempranas con un prototipo básico. Estas conversaciones confirmaron que el tiempo de espera, el formulario engorroso y el selector de cuenta ambiguo eran los principales puntos de dolor.",
    "transfer.strategy":
      "Mi estrategia fue clara: eliminar los tiempos de espera, simplificar el formulario y alinear el patrón de transferencias con nuestro Home recién rediseñado. Al hacer que las transferencias fueran consistentes con el Home, creamos un patrón que escalaría en toda la aplicación.",
    "transfer.decision1.title":
      "1. Eliminar la Espera de 30 Minutos Después de Agregar un Destinatario",
    "transfer.decision1.problem":
      "Después de agregar un nuevo destinatario, los usuarios se veían obligados a esperar 30 minutos antes de enviar dinero. Esta medida de seguridad regulatoria creaba fricción, confusión y abandonos en un momento donde los usuarios esperaban inmediatez.",
    "transfer.decision1.change":
      "Me asocié con los equipos de riesgo, cumplimiento e ingeniería para eliminar el tiempo de espera implementando validaciones en tiempo real y verificaciones de seguridad en segundo plano. Para respaldar el cambio operacional alineado con las regulaciones de Banxico, introduje una estrategia de comunicación clara que presentaba la actualización como un beneficio para el usuario y construía confianza en torno a la nueva experiencia.",
    "transfer.decision1.outcome":
      "Tasa de adopción del 97%. Más de 1 millón de usuarios activos se beneficiaron. Las transferencias se volvieron inmediatas, eliminando el mayor punto de fricción en la experiencia.",
    "transfer.decision2.title":
      "2. Campo Único de Entrada para Información del Destinatario",
    "transfer.decision2.problem":
      "Agregar un nuevo destinatario requería múltiples campos y selección manual del banco y tipo de cuenta. Esto aumentaba la carga cognitiva, ralentizaba el proceso y generaba errores frecuentes.",
    "transfer.decision2.change":
      "Introduje un campo único de entrada donde los usuarios podían ingresar cualquier identificador de destinatario: número telefónico, CLABE o tarjeta de débito. El sistema detectaba automáticamente el tipo de entrada, identificaba el banco de destino y, en algunos casos, mostraba el nombre del destinatario.",
    "transfer.decision2.outcome":
      "Reduje la fricción y la carga cognitiva. Creación de destinatarios más rápida y menos errores, haciendo que las transferencias se sintieran instantáneas y sin esfuerzo.",
    "transfer.decision3.title":
      "3. Indicadores Visuales para Transferencias Recurrentes",
    "transfer.decision3.problem":
      "Los usuarios tenían dificultades para identificar rápidamente a los destinatarios durante transferencias recurrentes. Nombres similares y falta de señales visuales aumentaban el tiempo de decisión y los errores de selección.",
    "transfer.decision3.change":
      "Introduje identificadores visuales incluyendo logotipos bancarios, alias de destinatarios y una sección dedicada de 'destinatarios frecuentes'. Estas señales mejoraron el reconocimiento y redujeron el esfuerzo de decisión.",
    "transfer.decision3.outcome":
      "Transferencias recurrentes más rápidas y mayor confianza al seleccionar destinatarios. El cambio contribuyó a reducir aún más el tiempo total de transferencia.",
    "transfer.impact":
      "Tiempo total: ~35 min → ~2 min. >1M usuarios beneficiados. +32% transaccionalidad. +2.7 pts NPS.",
    "transfer.reflection":
      "Este proyecto reforzó el valor de reducir la carga cognitiva y diseñar patrones reutilizables. La alineación con el rediseño del Home aseguró consistencia y escalabilidad en toda la plataforma.",

    // Footer
    "footer.title": "Construyamos algo significativo.",
    "footer.ats": "Currículum ATS",
    "footer.rights": "David Hurtado. Todos los derechos reservados.",

    // About - MANTENER ORIGINAL
    "about.title.part1": "I design how things ",
"about.title.part2": "come into focus.",
"about.p1":
  "Hi, I’m David. (Dave to friends.) I design products that connect real human needs with tangible business outcomes—at scale. I currently lead Digital Product Design at Scotiabank Mexico.",
"about.p2":
  "My work sits at the intersection of design, product, and decision-making. I look for clarity, alignment, and impact.",
"about.p3":
  "With that mindset, I’ve driven more than CAD 3M in savings through product strategy in banking. I’ve also helped grow annual retail sales by up to 3% through data-informed design, while building teams that deliver with consistency and efficiency.",
"about.p4":
  "Lately, I’ve been exploring how AI can reshape the design process—experimenting with new ways of working and uncovering new approaches to validating ideas through an independent studio.",
"about.p5":
  "Outside of work, I’m into film, music, and graphic novels. Let’s connect—I’m always open to new experiences.",
    "about.coreFocus": "Enfoque Principal",
    "about.focus1": "Estrategia de Producto",
    "about.focus2": "Liderazgo UX/UI",
    "about.focus3": "Descubrimiento Continuo",
    "about.focus4": "Sistemas de Diseño",
    "about.certifications": "Certificaciones",
    "about.cert1": "Gestión de Productos Digitales",
    "about.cert2": "Estrategia de Producto",
    "about.cert3": "Centrado en el Cliente",
    "about.cta": "Ponte en contacto",

    // Leadership
    "leadership.badge": "Personas y Procesos",
    "leadership.title":
      "Diseñando el entorno donde ocurre el diseño.",
    "leadership.subtitle":
      "Con más de 4 años de experiencia liderando equipos multidisciplinarios de UX, mi enfoque se centra en la gestión del talento, la experimentación continua y tratar al equipo de diseño como mi usuario más importante.",
    "leadership.p1.title": "Seguridad Psicológica Primero",
    "leadership.p1.desc":
      "Crear un entorno donde los diseñadores se sientan seguros compartiendo ideas en etapas tempranas y brindando retroalimentación constructiva. Los equipos de alta confianza se mueven más rápido e innovan mejor.",
    "leadership.p2.title": "Design Ops y Herramientas",
    "leadership.p2.desc":
      "Aplicar principios de UX a nuestros procesos internos. Optimizar flujos de trabajo, establecer convenciones claras y automatizar tareas repetitivas.",
    "leadership.p3.title": "Empatía Interfuncional",
    "leadership.p3.desc":
      "Cerrar la brecha entre ingeniería, producto y diseño. Fomentar la comprensión mutua para alinear plazos realistas y objetivos compartidos.",
    "leadership.p4.title": "Crecimiento y Mentoría",
    "leadership.p4.desc":
      "Personalizar trayectorias profesionales para cada miembro del equipo. Realizar reuniones 1:1 regulares enfocadas en objetivos a largo plazo en lugar de solo actualizaciones de estado de proyectos.",
    "leadership.quote":
      '"David tiene una habilidad única para equilibrar las necesidades del negocio con una experiencia de usuario impecable. Su mentoría cambió por completo mi trayectoria profesional."',
    "leadership.quoteAuthor": "— Diseñador UX Senior",
    "leadership.testimonial1.text":
      "Dave ha sido de los mejores managers con los que he trabajado. Su feedback constante y los challenges que me hizo, realmente me han hecho crecer como profesional.",
    "leadership.testimonial1.name": "Mariana Cuevas",
    "leadership.testimonial1.role": "Sr. Product Designer",
    "leadership.testimonial2.text":
      "David siempre busca impulsar el talento y la visibilidad del equipo. Constantemente genera oportunidades donde todos puedan brillar por sus propios méritos.",
    "leadership.testimonial2.name": "Rose Moyers",
    "leadership.testimonial2.role": "UX Researcher",
    "leadership.testimonial3.text":
      "David es un crack. Ha sabido guiar al equipo durante procesos de transformación y ayudado a implementar mejores prácticas. La elevación del craft del equipo y los resultados obtenidos hablan por sí solos.",
    "leadership.testimonial3.name": "Humberto Torres IB",
    "leadership.testimonial3.role": "Product Design Director",

    // Contact
    "contact.badge": "Contacto",
    "contact.title": "Conectemos.",
    "contact.subtitle":
      "Estoy abierto a nuevas oportunidades, liderando equipos y definiendo estrategias donde la creatividad converge con los objetivos de negocio.",
    "contact.emailCTA": "Enviar un correo",
    "contact.location": "Ubicación",
    "contact.locationVal1": "Ciudad de México, México",
    "contact.locationVal2": "(Abierto a Remoto)",
    "contact.phone": "Teléfono",
    "contact.social": "Social",
    "contact.linkedin": "Perfil de LinkedIn",

    // ATS CV
    "cv.title": "David Hurtado Santiago",
    "cv.subtitle":
      "UX Senior Manager | Estratega de Producto | Líder de Personas",
    "cv.location": "Ciudad de México, México",
    "cv.summaryTitle": "Resumen Profesional",
    "cv.summary":
      "Diseñador de Experiencia de Usuario con más de 10 años de experiencia liderando iniciativas digitales para banca, comercio electrónico y tecnología. Experto en gestión de equipos, diseño centrado en el usuario, metodologías ágiles y estrategia de producto. Mi enfoque combina pensamiento de negocio, creatividad y liderazgo para construir productos que generan valor y resultados medibles. Actualmente lidero un equipo de diseñadores UX en Scotiabank, impulsando la evolución de experiencias digitales centradas en el cliente.",
    "cv.expTitle": "Experiencia Profesional",
    "cv.eduTitle": "Educación",
    "cv.skillsTitle": "Habilidades Clave",
    "cv.certTitle": "Certificaciones",
    "cv.langTitle": "Idiomas",
    "cv.download": "Descargar Versión PDF",
    "cv.present": "Presente",
    "cv.skills": [
      "Diseño de Productos Digitales",
      "Liderazgo de Equipos UX",
      "Estrategia de Producto",
      "Investigación de Usuarios",
      "Agile / SCRUM",
      "Design Thinking",
    ],
    "cv.languages": ["Español: Nativo", "Inglés: C1"],
  },
};

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = (
    key: string,
    options?: { returnObjects?: boolean },
  ): any => {
    const value = translations[language][key] || key;
    if (options?.returnObjects && Array.isArray(value)) {
      return value;
    }
    return value;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguage must be used within a LanguageProvider",
    );
  }
  return context;
}

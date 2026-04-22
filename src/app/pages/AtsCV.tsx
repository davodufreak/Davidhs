import { useLanguage } from "../context/LanguageContext";

export function AtsCV() {
  const { language, t } = useLanguage();

  const data = {
    en: {
      role: "UX Senior Manager | Product Strategist | People Leader",
      location: "Mexico City, Mexico",
      summary: "User Experience Designer with over 10 years leading digital initiatives for banking, e-commerce, and technology. Expert in team management, user-centered design, agile methodologies, and product strategy. My approach combines business thinking, creativity, and leadership to build products that generate value and measurable results. Currently leading a UX team at Scotiabank, driving the evolution of customer-centric digital experiences.",
      exp: [
        {
          title: "UX Designer Senior Manager",
          company: "Scotiabank Mexico",
          date: "July 2024 – Present | Mexico City",
          items: [
            "Strategic leadership of UX team for digital banking products.",
            "Talent management, collaborative design, and product vision definition.",
            "Driven continuous discovery practices and product discovery."
          ]
        },
        {
          title: "UX Designer",
          company: "Scotiabank Mexico",
          date: "June 2021 – July 2024",
          items: [
            "Designed user-centered experiences for financial applications.",
            "Facilitated design thinking workshops, user journey mapping, and usability testing."
          ]
        },
        {
          title: "Creative Director",
          company: "Igni",
          date: "September 2019 – June 2021",
          items: [
            "Designed interfaces and validated flows for digital marketing automations.",
            "Developed graphic systems for brands like Walmart and Essity."
          ]
        },
        {
          title: "Co-founder",
          company: "Manifesto MX",
          date: "August 2019 – January 2021",
          items: [
            "Founded a design community focused on UX and product.",
            "Organized events and talks with international leaders like Caroline Sinders and Marta Silvia del Río."
          ]
        },
        {
          title: "UX/UI Expert",
          company: "Bedu",
          date: "July 2019 – July 2020",
          items: [
            "Facilitated practical workshops for designers in training.",
            "Educational approach oriented towards the professional world."
          ]
        },
        {
          title: "UX/UI Lead",
          company: "Broxel",
          date: "June 2019 – September 2019",
          items: [
            "Directed UX projects and managed the design team."
          ]
        },
        {
          title: "UX/UI Designer",
          company: "Broxel",
          date: "May 2018 – June 2019",
          items: [
            "Designed interfaces for B2B and B2C fintech solutions.",
            "Web development and user experience testing."
          ]
        },
        {
          title: "Lead Web Designer",
          company: "Softtek",
          date: "February 2017 – May 2018",
          items: [
            "Designed digital experiences and social media campaigns.",
            "Created high-impact executive presentations."
          ]
        },
        {
          title: "Digital Designer",
          company: "Código X",
          date: "February 2016 – February 2017",
          items: [
            "Developed advertising materials, websites, and audiovisual production."
          ]
        },
        {
          title: "Design & Digital Print Coordinator / Designer",
          company: "Edamsa Impresiones",
          date: "September 2013 – February 2016",
          items: [
            "Managed graphic and digital projects for corporate communication."
          ]
        }
      ],
      edu: [
        "University of Guanajuato – Bachelor's in Graphic Design (2009 – 2013)",
        "MacSchool – Diploma in Web Design (2015)",
        "GracoLabs – Stop-Motion Animation Course (2016 – 2017)"
      ],
      skills: ["Digital Product Design", "UX Team Leadership", "Product Strategy", "User Research", "Agile / SCRUM", "Design Thinking"],
      certifications: ["Continuous Discovery", "Digital Product Management", "Product Strategy", "Customer Centricity: Working Backwards"],
      languages: ["Spanish: Native", "English: C1"]
    },
    es: {
      role: "UX Senior Manager | Product Strategist | People Leader",
      location: "Ciudad de México, México",
      summary: "Diseñador de experiencia de usuario con más de 10 años liderando iniciativas digitales para banca, e-commerce y tecnología. Experto en dirección de equipos, diseño centrado en el usuario, metodologías ágiles y estrategia de producto. Mi enfoque combina pensamiento de negocio, creatividad y liderazgo para construir productos que generan valor y resultados medibles. Actualmente lidero un equipo de diseñadores UX en Scotiabank, impulsando la evolución de experiencias digitales centradas en el cliente.",
      exp: [
        {
          title: "UX Designer Senior Manager",
          company: "Scotiabank México",
          date: "Julio 2024 – Presente | Ciudad de México",
          items: [
            "Liderazgo estratégico de equipo UX para productos digitales bancarios.",
            "Gestión de talento, diseño colaborativo y definición de la visión de producto.",
            "Impulso de prácticas centradas en la investigación continua (continuous discovery) y descubrimiento de producto."
          ]
        },
        {
          title: "UX Designer",
          company: "Scotiabank México",
          date: "Junio 2021 – Julio 2024",
          items: [
            "Diseño de experiencias centradas en el usuario para aplicaciones financieras.",
            "Facilitación de workshops de ideación (design thinking), mapeo de user journeys y pruebas de usabilidad."
          ]
        },
        {
          title: "Director Creativo",
          company: "Igni",
          date: "Septiembre 2019 – Junio 2021",
          items: [
            "Diseño de interfaces y validación de flujos para automatizaciones de marketing digital.",
            "Desarrollo de sistemas gráficos para marcas como Walmart y Essity."
          ]
        },
        {
          title: "Cofundador",
          company: "Manifesto MX",
          date: "Agosto 2019 – Enero 2021",
          items: [
            "Fundador de comunidad de diseño con enfoque en UX y producto.",
            "Organización de eventos y charlas con líderes internacionales como Caroline Sinders y Marta Silvia del Río."
          ]
        },
        {
          title: "UX/UI Expert",
          company: "Bedu",
          date: "Julio 2019 – Julio 2020",
          items: [
            "Facilitador de workshops prácticos para diseñadores en formación.",
            "Enfoque educativo orientado al mundo laboral."
          ]
        },
        {
          title: "UX/UI Lead",
          company: "Broxel",
          date: "Junio 2019 – Septiembre 2019",
          items: [
            "Dirección de proyectos UX y gestión de equipo de diseño."
          ]
        },
        {
          title: "UX/UI Designer",
          company: "Broxel",
          date: "Mayo 2018 – Junio 2019",
          items: [
            "Diseño de interfaces para soluciones B2B y B2C en fintech.",
            "Desarrollo web y pruebas de experiencia de usuario."
          ]
        },
        {
          title: "Lead Web Designer",
          company: "Softtek",
          date: "Febrero 2017 – Mayo 2018",
          items: [
            "Diseño de experiencias digitales y campañas para redes sociales.",
            "Creación de presentaciones ejecutivas de alto impacto."
          ]
        },
        {
          title: "Diseñador Digital",
          company: "Código X",
          date: "Febrero 2016 – Febrero 2017",
          items: [
            "Desarrollo de materiales publicitarios, sitios web y producción audiovisual."
          ]
        },
        {
          title: "Coordinador de Diseño e Impresión Digital / Diseñador",
          company: "Edamsa Impresiones",
          date: "Septiembre 2013 – Febrero 2016",
          items: [
            "Gestión de proyectos gráficos y digitales para comunicación corporativa."
          ]
        }
      ],
      edu: [
        "Universidad de Guanajuato – Licenciatura en Diseño Gráfico (2009 – 2013)",
        "MacSchool – Diplomado en Diseño Web (2015)",
        "GracoLabs – Curso de Animación Stop-Motion (2016 – 2017)"
      ],
      skills: ["Diseño de Productos Digitales", "Liderazgo de Equipos de UX", "Estrategia de Producto", "Investigación de Usuario", "Agile / SCRUM", "Design Thinking"],
      certifications: ["Continuous Discovery", "Digital Product Management", "Product Strategy", "Customer Centricity: Working Backwards"],
      languages: ["Español: Nativo", "Inglés: C1"]
    }
  };

  const content = data[language as keyof typeof data];

  return (
    <div className="max-w-3xl mx-auto py-24 px-6 font-sans text-foreground bg-background">
      <header className="mb-12 border-b pb-6 border-border">
        <h1 className="text-4xl font-serif font-bold mb-2">David Hurtado Santiago</h1>
        <h2 className="text-2xl text-muted-foreground mb-4">{content.role}</h2>
        <div className="text-muted-foreground space-y-1">
          <p>{content.location}</p>
          <p>david.hurtado91@gmail.com | +52 561-127-4440</p>
          <p>linkedin.com/in/davidhurtado91</p>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider text-foreground">
          {t("cv.summaryTitle")}
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          {content.summary}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider text-foreground">
          {t("cv.expTitle")}
        </h2>
        <div className="space-y-8">
          {content.exp.map((job, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-serif font-bold">{job.title}</h3>
              <div className="flex justify-between text-muted-foreground font-medium mb-2">
                <span>{job.company}</span>
                <span>{job.date}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {job.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider text-foreground">
          {t("cv.eduTitle")}
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {content.edu.map((ed, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: ed.replace(/(.*?) –/, '<strong>$1</strong> –') }} />
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider text-foreground">
          {t("cv.skillsTitle")}
        </h2>
        <ul className="grid grid-cols-2 gap-2 list-disc pl-5 text-muted-foreground">
          {content.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider text-foreground">
          {t("cv.certTitle")}
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {content.certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider text-foreground">
          {t("cv.langTitle")}
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
          {content.languages.map((lang, idx) => (
            <li key={idx}>{lang}</li>
          ))}
        </ul>
      </section>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <a 
          href="/CV_David_Hurtado.pdf" 
          download
          className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-base font-medium text-foreground bg-transparent hover:bg-foreground hover:text-background transition-colors"
        >
          {t("cv.download")}
        </a>
      </div>
    </div>
  );
}
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Section {
  id: string;
  number: string;
  title: string;
}

interface CaseStudyTOCProps {
  sections: Section[];
  activeSection: string;
}

export function CaseStudyTOC({ sections, activeSection }: CaseStudyTOCProps) {
  const { language } = useLanguage();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="space-y-1">
      <h4 className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-6">
        {language === 'es' ? 'En esta página' : 'On this page'}
      </h4>
      
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleScrollToSection(section.id)}
              className={`group flex items-start gap-3 text-left w-full transition-colors ${
                activeSection === section.id
                  ? 'text-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="font-serif text-sm font-medium min-w-[24px]">
                {section.number}
              </span>
              <span className="font-sans text-sm leading-relaxed">
                {section.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="pt-8 mt-8 border-t border-border">
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          {language === 'es' ? 'Volver arriba' : 'Back to top'}
        </button>
      </div>
    </nav>
  );
}

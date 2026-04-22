import { ReactNode, useState, useEffect } from 'react';
import { CaseStudyTOC } from './CaseStudyTOC';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Section {
  id: string;
  number: string;
  title: string;
}

interface CaseStudyLayoutProps {
  children: ReactNode;
  sections: Section[];
}

export function CaseStudyLayout({ children, sections }: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileTocOpen(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* Desktop: 2-column layout */}
      <div className="hidden lg:grid lg:grid-cols-[280px_1fr] lg:gap-16 max-w-[1400px] mx-auto px-6 xl:px-12">
        {/* Sticky TOC */}
        <aside className="relative">
          <div className="sticky top-32">
            <CaseStudyTOC sections={sections} activeSection={activeSection} />
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          {children}
        </div>
      </div>

      {/* Mobile/Tablet: Full width content with sticky TOC button */}
      <div className="lg:hidden max-w-[800px] mx-auto px-6">
        {/* Sticky Mobile TOC Button */}
        <button
          onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
          className="fixed bottom-8 right-6 z-40 bg-accent text-white p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
          aria-label={language === 'es' ? 'Abrir índice' : 'Open table of contents'}
        >
          {isMobileTocOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile TOC Overlay */}
        {isMobileTocOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setIsMobileTocOpen(false)}
            />
            <div className="fixed inset-x-0 bottom-0 bg-card border-t border-border z-40 rounded-t-2xl max-h-[70vh] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-serif text-foreground mb-6">
                  {language === 'es' ? 'En esta página' : 'On this page'}
                </h3>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <button
                      key={section.id}
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
                  ))}
                </nav>
              </div>
            </div>
          </>
        )}

        {children}
      </div>
    </div>
  );
}
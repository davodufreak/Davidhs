import { Link, Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t("nav.work"), path: "/work" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.leadership"), path: "/leadership" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    // Download PDF from public folder
    const link = document.createElement('a');
    link.href = '/DavidHS_Resume.pdf';
    link.download = 'DavidHS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white flex flex-col">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md transition-all duration-300 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif tracking-tight text-foreground group">
            David Hurtado<span className="text-[#BAF289]">.</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === "/work" && location.pathname.includes("/work"));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] tracking-wide transition-all duration-300 relative group ${
                    isActive ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-foreground transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
            <button 
              onClick={handleDownloadCV}
              className="ml-4 mr-4 px-5 py-2.5 text-[14px] uppercase tracking-widest text-foreground border border-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              {t("nav.resume")}
            </button>
            <button 
              onClick={toggleLanguage}
              className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-[#baf289] dark:bg-[#77A54F]"
              aria-label="Toggle language"
            >
              <span className="absolute left-1 top-1 w-6 h-6 flex items-center justify-center z-10 pointer-events-none">
                <span className={`text-[10px] font-bold transition-colors ${language === 'en' ? 'text-white' : 'text-[#111111] dark:text-[#0A0A0A]'}`}>EN</span>
              </span>
              <span className="absolute right-1 top-1 w-6 h-6 flex items-center justify-center z-10 pointer-events-none">
                <span className={`text-[10px] font-bold transition-colors ${language === 'es' ? 'text-white' : 'text-[#111111] dark:text-[#0A0A0A]'}`}>ES</span>
              </span>
              <span
                className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-foreground transition-transform duration-300 ${
                  language === 'es' ? 'translate-x-[32px]' : 'translate-x-0'
                }`}
              />
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 bg-[#baf289] dark:bg-[#77A54F]"
              aria-label="Toggle language"
            >
              <span className="absolute left-1 top-1 w-6 h-6 flex items-center justify-center z-10 pointer-events-none">
                <span className={`text-[10px] font-bold transition-colors ${language === 'en' ? 'text-white' : 'text-[#111111] dark:text-[#0A0A0A]'}`}>EN</span>
              </span>
              <span className="absolute right-1 top-1 w-6 h-6 flex items-center justify-center z-10 pointer-events-none">
                <span className={`text-[10px] font-bold transition-colors ${language === 'es' ? 'text-white' : 'text-[#111111] dark:text-[#0A0A0A]'}`}>ES</span>
              </span>
              <span
                className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-foreground transition-transform duration-300 ${
                  language === 'es' ? 'translate-x-[32px]' : 'translate-x-0'
                }`}
              />
            </button>
            <button 
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-32 px-6 md:hidden flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-4xl font-serif text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleDownloadCV}
              className="text-xl font-sans text-muted-foreground uppercase tracking-widest mt-8 text-left"
            >
              {t("nav.downloadResume")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="w-full py-16 mt-32 border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <h3 className="text-2xl font-serif text-foreground mb-4">{t("footer.title")}</h3>
            <a href="mailto:david.hurtado91@gmail.com" className="text-[18px] text-accent hover:underline transition-all">
              david.hurtado91@gmail.com
            </a>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-between">
            <div className="flex gap-8 mb-8 md:mb-0 text-[15px] text-muted-foreground">
              <a href="https://linkedin.com/in/davidhurtado91" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <Link to="/cv-ats" className="hover:text-foreground transition-colors">{t("footer.ats")}</Link>
            </div>
            <p className="text-[14px] text-muted-foreground">© {new Date().getFullYear()} {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-6">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-500 ${
            scrolled ? "bg-background shadow-hover" : "bg-background/95 shadow-elegant"
          } backdrop-blur-sm`}
        >
          <div className="px-8 py-3 flex justify-between items-center">
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center flex-1">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-inter text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('nav.portfolio')}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-inter text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-inter text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('nav.about')}
              </button>
            </div>

            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="PR Design" className="h-14 w-14" />
            </button>

            {/* Desktop Socials & Language */}
            <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
              <a
                href="https://wa.me/34123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-foreground/70" />
              </a>
              <a
                href="https://instagram.com/paolarossdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground/70" />
              </a>
              <div className="flex items-center gap-1 ml-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`text-sm font-inter px-2 py-1 rounded transition-colors ${
                    language === 'es'
                      ? 'text-foreground font-semibold bg-muted'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  ES
                </button>
                <span className="text-foreground/30">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-inter px-2 py-1 rounded transition-colors ${
                    language === 'en'
                      ? 'text-foreground font-semibold bg-muted'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center flex-1 justify-end">
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
                <Menu className="w-6 h-6 text-foreground/80" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-2"
          >
            <X className="w-8 h-8 text-foreground/80" />
          </button>

          <div className="flex flex-col items-center gap-8 mb-12">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-2xl font-playfair text-foreground hover:text-primary transition-colors"
            >
              {t('nav.portfolio')}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-2xl font-playfair text-foreground hover:text-primary transition-colors"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-playfair text-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </button>
          </div>

          <div className="flex gap-6 mb-12">
            <a
              href="https://wa.me/34123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-foreground/70" />
            </a>
            <a
              href="https://instagram.com/paolarossdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:bg-muted/80 transition-colors"
            >
              <Instagram className="w-6 h-6 text-foreground/70" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('es')}
              className={`text-lg font-inter px-4 py-2 rounded-lg transition-colors ${
                language === 'es'
                  ? 'text-foreground font-bold bg-muted'
                  : 'text-foreground/70'
              }`}
            >
              ES
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`text-lg font-inter px-4 py-2 rounded-lg transition-colors ${
                language === 'en'
                  ? 'text-foreground font-bold bg-muted'
                  : 'text-foreground/70'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

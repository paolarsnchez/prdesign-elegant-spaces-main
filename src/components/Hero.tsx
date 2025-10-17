import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900 text-white shadow-elegant border-b border-border"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
  <div className="absolute inset-0 bg-neutral-900/60" />
      </div>

  <div className="relative z-10 w-full text-center md:text-left animate-fade-in flex flex-col items-center md:items-start px-6 md:px-20" style={{ transform: 'translate(5cm, 5cm)' }}>
        <h1 className="font-black-mango text-4xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-2xl">
          {t('hero.title')}
        </h1>

        <p className="font-modern-thin text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
          {t('hero.subtitle')}
        </p>

        {/* Botón eliminado según solicitud */}
      </div>
    </section>
  );
};

export default Hero;

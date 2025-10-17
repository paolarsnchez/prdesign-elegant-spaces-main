import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  return (
  <section id="about" className="py-24 bg-neutral-100 shadow-elegant border-b border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-center text-foreground mb-12 animate-fade-in">
          {t('about.title')}
        </h2>

        <div className="space-y-6 text-muted-foreground font-inter text-base md:text-lg leading-relaxed animate-slide-up">
          <p>
            {t('about.paragraph1')}{" "}
            <span className="text-primary font-medium">{t('about.paragraph1.elegance')}</span>,{" "}
            <span className="text-secondary font-medium">{t('about.paragraph1.functionality')}</span> y una estética{" "}
            <span className="text-accent font-medium">{t('about.paragraph1.aesthetic')}</span>.
          </p>

          <p>
            {t('about.paragraph2')} <strong>{t('about.paragraph2.attention')}</strong>{t('about.paragraph2.middle')}{" "}
            <span className="text-primary font-medium">{t('about.paragraph2.sophistication')}</span>{t('about.paragraph2.nor')}{" "}
            <span className="text-secondary font-medium">{t('about.paragraph2.comfort')}</span>.
          </p>

          <p>
            {t('about.paragraph3')}{" "}
            <span className="text-accent font-medium">{t('about.paragraph3.unique')}</span>.
          </p>

          <p>
            {t('about.paragraph4')}{" "}
            <span className="text-primary font-medium">{t('about.paragraph4.character')}</span>{t('about.paragraph4.middle')} <em>{t('about.paragraph4.pleasant')}</em>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

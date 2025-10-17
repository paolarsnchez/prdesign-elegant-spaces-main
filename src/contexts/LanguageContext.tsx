import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Servicios',
    'nav.about': 'Sobre mí',
    
    // Hero
    'hero.title': 'Diseño Atemporal',
    'hero.subtitle': 'Interiores que reflejan elegancia y confort',
    
    // Portfolio
    'portfolio.title': 'Portfolio de Proyectos',
    'portfolio.view': 'View',
    'portfolio.close': 'Cerrar',
    'portfolio.previous': 'Anterior',
    'portfolio.next': 'Siguiente',
    'portfolio.project1.title': 'Serenidad moderna',
    'portfolio.project1.date': 'En proceso, 2025',
    'portfolio.project1.description': 'Un santuario elegante con luz natural y texturas orgánicas. Descubre cómo creamos este espacio de calma.',
    'portfolio.project2.title': 'Segundo Hogar',
    'portfolio.project2.date': 'Agosto, 2025',
    'portfolio.project2.description': 'Devolviendo la vida a este apartamento con un diseño contemporáneo que combina funcionalidad y estilo.',
    'portfolio.project3.title': 'Retiro en la Costa',
    'portfolio.project3.date': 'Septiembre, 2024',
    'portfolio.project3.description': 'Llevando el exterior adentro con una paleta de azules suaves y neutros arenosos. Experimenta la tranquilidad.',
    
    // Services
    'services.title': 'Servicios',
    'services.cta': 'Comienza tu proyecto',
    'services.service1.title': 'Primera Consulta',
    'services.service1.price': 'Gratis',
    'services.service1.feature1': 'Videollamada personalizada',
    'services.service1.feature2': 'Análisis del espacio actual',
    'services.service1.feature3': 'Escucha activa de tus necesidades',
    'services.service1.feature4': 'Recomendaciones de estilo y distribución',
    'services.service2.title': 'Proyecto Digital Básico',
    'services.service2.price': 'Desde 150€',
    'services.service2.feature1': 'Plano actualizado de distribución',
    'services.service2.feature2': 'Moodboard',
    'services.service2.feature3': 'Selección de 5 piezas de mobiliario',
    'services.service2.feature4': 'Presupuesto estimado del proyecto',
    'services.service3.title': 'Proyecto Integral',
    'services.service3.price': 'Desde 400€ por espacio',
    'services.service3.feature1': 'Presentación completa del proyecto',
    'services.service3.feature2': 'Selección de mobiliario y decoración',
    'services.service3.feature3': 'Planos técnicos detallados',
    'services.service3.feature4': 'Renders 3D realistas',
    'services.service3.feature5': 'Acompañamiento en la ejecución del proyecto',
    
    // About
    'about.title': 'Sobre mí',
    'about.paragraph1': 'Soy arquitecta de interiores especializada en crear espacios que combinan',
    'about.paragraph1.elegance': 'elegancia atemporal',
    'about.paragraph1.functionality': 'funcionalidad',
    'about.paragraph1.aesthetic': 'serena y versátil',
    'about.paragraph2': 'Mi filosofía se basa en la',
    'about.paragraph2.attention': 'atención al detalle',
    'about.paragraph2.middle': 'y en diseñar ambientes que reflejan la personalidad y necesidades de cada cliente, sin renunciar a la',
    'about.paragraph2.sophistication': 'sofisticación',
    'about.paragraph2.nor': 'ni a la',
    'about.paragraph2.comfort': 'comodidad',
    'about.paragraph3': 'Trabajo principalmente de forma online, lo que me permite ofrecer proyectos de diseño personalizados tanto para viviendas particulares como para espacios comerciales en toda España y Europa. Cada proyecto es una oportunidad para transformar un espacio en un lugar',
    'about.paragraph3.unique': 'único',
    'about.paragraph4': 'Mi objetivo es que cada rincón cuente una historia y transmita',
    'about.paragraph4.character': 'carácter',
    'about.paragraph4.middle': ', creando ambientes donde vivir o trabajar sea una experiencia',
    'about.paragraph4.pleasant': 'agradable y enriquecedora',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Listo para transformar tu espacio?',
    'contact.description': 'Contacta para tu consulta gratuita: recibirás asesoría real,',
    'contact.description.ideas': 'ideas originales y',
    'contact.description.proposal': 'una propuesta profesional',
    'contact.description.without': 'sin',
    'contact.description.commitment': 'compromiso',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu email',
    'contact.form.message': 'Cuéntame sobre tu proyecto...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.error': 'Por favor, completa todos los campos.',
    'contact.form.success.title': 'Mensaje enviado',
    'contact.form.success.description': 'Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    // Testimonials
    'testimonials.title': 'Clientes',
    'testimonials.subtitle': 'Lo que dicen quienes han confiado en Paola Ross Design para transformar sus espacios',
    'testimonials.testimonial1.name': 'María Rodríguez',
    'testimonials.testimonial1.role': 'Propietaria de Vivienda',
    'testimonials.testimonial1.text': 'El trabajo de Paola transformó completamente nuestro hogar. Cada detalle fue pensado con elegancia y funcionalidad.',
    'testimonials.testimonial2.name': 'Margarita Marín',
    'testimonials.testimonial2.role': 'Propietaria de Vivienda',
    'testimonials.testimonial2.text': 'Profesionalismo excepcional. Nos hemos puesto en manos de Paola para dos proyectos y el resultado ha sido espectacular.',
    'testimonials.testimonial3.name': 'Jose López',
    'testimonials.testimonial3.role': 'Propietario de Vivienda',
    'testimonials.testimonial3.text': 'Paola tiene un don para entender lo que quieres y llevarlo a la realidad con un toque de sofisticación. ¡Muy recomendable!',
  },
  en: {
    // Navigation
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    
    // Hero
    'hero.title': 'Timeless Design',
    'hero.subtitle': 'Interiors that reflect elegance and comfort',
    
    // Portfolio
    'portfolio.title': 'Project Portfolio',
    'portfolio.view': 'View',
    'portfolio.close': 'Close',
    'portfolio.previous': 'Previous',
    'portfolio.next': 'Next',
    'portfolio.project1.title': 'Modern Serenity',
    'portfolio.project1.date': 'In Progress, 2025',
    'portfolio.project1.description': 'An elegant sanctuary with natural light and organic textures. Discover how we created this space.',
    'portfolio.project2.title': 'Second Home',
    'portfolio.project2.date': 'August, 2025',
    'portfolio.project2.description': 'Bringing life back to this apartment with a contemporary design that combines functionality and style.',
    'portfolio.project3.title': 'Coastal Retreat',
    'portfolio.project3.date': 'September, 2024',
    'portfolio.project3.description': 'Bringing the outdoors in with a palette of soft blues and sandy neutrals. Experience the tranquility.',
    
    // Services
    'services.title': 'Services',
    'services.cta': 'Start Your Project',
    'services.service1.title': 'First Consultation',
    'services.service1.price': 'Free',
    'services.service1.feature1': 'Personalized video call',
    'services.service1.feature2': 'Current space analysis',
    'services.service1.feature3': 'Active listening to your needs',
    'services.service1.feature4': 'Style and layout recommendations',
    'services.service2.title': 'Basic Digital Project',
    'services.service2.price': 'From €150',
    'services.service2.feature1': 'Updated layout plan',
    'services.service2.feature2': 'Moodboard',
    'services.service2.feature3': 'Selection of 5 furniture pieces',
    'services.service2.feature4': 'Estimated project budget',
    'services.service3.title': 'Comprehensive Project',
    'services.service3.price': 'From €400 per space',
    'services.service3.feature1': 'Complete project presentation',
    'services.service3.feature2': 'Furniture and decoration selection',
    'services.service3.feature3': 'Detailed technical plans',
    'services.service3.feature4': 'Realistic 3D renders',
    'services.service3.feature5': 'Project execution support',
    
    // About
    'about.title': 'About Me',
    'about.paragraph1': 'I am an interior architect specialized in creating spaces that combine',
    'about.paragraph1.elegance': 'timeless elegance',
    'about.paragraph1.functionality': 'functionality',
    'about.paragraph1.aesthetic': 'serenity and versatility',
    'about.paragraph2': 'My philosophy is based on',
    'about.paragraph2.attention': 'attention to detail',
    'about.paragraph2.middle': 'and designing environments that reflect each client\'s personality and needs, without sacrificing',
    'about.paragraph2.sophistication': 'sophistication',
    'about.paragraph2.nor': 'or',
    'about.paragraph2.comfort': 'comfort',
    'about.paragraph3': 'I work mainly online, which allows me to offer personalized design projects for both private homes and commercial spaces throughout Spain and Europe. Each project is an opportunity to transform a space into a',
    'about.paragraph3.unique': 'unique place',
    'about.paragraph3.end': '',
    'about.paragraph4': 'My goal is for every corner to tell a story and convey',
    'about.paragraph4.character': 'character',
    'about.paragraph4.middle': ', creating environments where living or working is a',
    'about.paragraph4.pleasant': 'pleasant and enriching experience',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Ready to transform your space?',
    'contact.description': 'Contact me for your free consultation: you will receive real advice,',
    'contact.description.ideas': 'original ideas and',
    'contact.description.proposal': 'a professional proposal',
    'contact.description.without': 'with no',
    'contact.description.commitment': 'commitment',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Tell me about your project...',
    'contact.form.send': 'Send Message',
    'contact.form.error': 'Please fill in all fields.',
    'contact.form.success.title': 'Message sent',
    'contact.form.success.description': 'Thank you for your message! I will contact you soon.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    // Testimonials
    'testimonials.title': 'Clients',
    'testimonials.subtitle': 'What those who have trusted Paola Ross Design to transform their spaces say',
    'testimonials.testimonial1.name': 'María Rodríguez',
    'testimonials.testimonial1.role': 'Homeowner',
    'testimonials.testimonial1.text': 'Paola\'s work completely transformed our home. Every detail was designed with elegance and functionality.',
    'testimonials.testimonial2.name': 'Margarita Marín',
    'testimonials.testimonial2.role': 'Homeowner',
    'testimonials.testimonial2.text': 'Exceptional professionalism. We have put ourselves in Paola\'s hands for two projects and the result has been spectacular.',
    'testimonials.testimonial3.name': 'Jose López',
    'testimonials.testimonial3.role': 'Homeowner',
    'testimonials.testimonial3.text': 'Paola has a gift for understanding what you want and bringing it to reality with a touch of sophistication. Highly recommended!',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

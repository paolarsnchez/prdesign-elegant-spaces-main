import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: t('contact.form.error'),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
  <section id="contact" className="py-24 bg-neutral-100 text-neutral-900 shadow-elegant border-b border-border relative">
      {/* Franja/acento superior en color primario */}
      <div className="absolute top-0 left-0 w-full h-3 bg-primary rounded-b-xl" />
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
          {t('contact.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 gap-y-8">
          {/* Text Block */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="font-playfair text-2xl font-semibold text-foreground">
              {t('contact.subtitle')}
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed">
              {t('contact.description')}{" "}
              <span className="text-primary font-medium">{t('contact.description.ideas')}</span>{" "}
              <span className="text-secondary font-medium">{t('contact.description.proposal')}</span> {t('contact.description.without')}{" "}
              <span className="text-accent font-medium">{t('contact.description.commitment')}</span>.
            </p>
          </div>

          {/* Form Block */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up md:col-start-2 md:row-start-1 md:row-span-2">
            <div>
              <Input
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="font-inter bg-background border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="font-inter bg-background border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="font-inter bg-background border-border"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter shadow-elegant hover:shadow-hover transition-all duration-300"
            >
              {t('contact.form.send')}
            </Button>
          </form>

          {/* Social Block */}
          <div className="space-y-4 pt-6 animate-slide-up">
            <a
              href="mailto:info@paolarossdesign.es"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-inter">info@paolarossdesign.es</span>
            </a>
            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/34644941495"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/paolarossdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M8.5 19.5c.5-2.5 1.5-6.5 1.5-8.5V7.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4c0 2.5-2 4-4.5 4h-2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

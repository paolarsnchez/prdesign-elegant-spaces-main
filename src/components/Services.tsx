import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t("services.service1.title"),
      price: t("services.service1.price"),
      features: [
        t("services.service1.feature1"),
        t("services.service1.feature2"),
        t("services.service1.feature3"),
        t("services.service1.feature4"),
      ],
    },
    {
      title: t("services.service2.title"),
      price: t("services.service2.price"),
      features: [
        t("services.service2.feature1"),
        t("services.service2.feature2"),
        t("services.service2.feature3"),
        t("services.service2.feature4"),
      ],
    },
    {
      title: t("services.service3.title"),
      price: t("services.service3.price"),
      features: [
        t("services.service3.feature1"),
        t("services.service3.feature2"),
        t("services.service3.feature3"),
        t("services.service3.feature4"),
        t("services.service3.feature5"),
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <section id="services" className="py-24 bg-white text-neutral-900 shadow-elegant border-b border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border shadow-elegant hover:shadow-hover transition-all duration-500 animate-slide-up bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-playfair text-2xl md:text-3xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <p className="font-modern-thin text-lg md:text-xl font-light text-primary mt-2">
                  {service.price}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 font-modern-thin text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter px-8 shadow-elegant hover:shadow-hover transition-all duration-300"
          >
            {t('services.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

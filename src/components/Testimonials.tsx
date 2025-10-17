import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      name: t("testimonials.testimonial1.name"),
      role: t("testimonials.testimonial1.role"),
      text: t("testimonials.testimonial1.text"),
      rating: 5,
    },
    {
      id: 2,
      name: t("testimonials.testimonial2.name"),
      role: t("testimonials.testimonial2.role"),
      text: t("testimonials.testimonial2.text"),
      rating: 5,
    },
    {
      id: 3,
      name: t("testimonials.testimonial3.name"),
      role: t("testimonials.testimonial3.role"),
      text: t("testimonials.testimonial3.text"),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-center text-foreground mb-4 animate-fade-in">
          {t('testimonials.title')}
        </h2>
        <p className="font-inter text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-elegant hover:shadow-hover transition-all duration-500 animate-slide-up bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <div>
                  <p className="font-playfair font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

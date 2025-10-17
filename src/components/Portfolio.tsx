import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import livingRoom from "@/assets/portfolio-living-room.jpg";
import bedroom from "@/assets/portfolio-bedroom.jpg";
import commercial from "@/assets/portfolio-commercial.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      images: [livingRoom],
      title: t("portfolio.project1.title"),
      date: t("portfolio.project1.date"),
      description: t("portfolio.project1.description"),
    },
    {
      id: 2,
      images: [bedroom],
      title: t("portfolio.project2.title"),
      date: t("portfolio.project2.date"),
      description: t("portfolio.project2.description"),
    },
    {
      id: 3,
      images: [commercial],
      title: t("portfolio.project3.title"),
      date: t("portfolio.project3.date"),
      description: t("portfolio.project3.description"),
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const openGallery = (project) => {
    setActiveProject(project);
    setActiveImageIdx(0);
    setModalOpen(true);
  };
  const closeGallery = () => {
    setModalOpen(false);
    setActiveProject(null);
    setActiveImageIdx(0);
  };
  const nextImage = () => {
    if (activeProject && activeImageIdx < activeProject.images.length - 1) {
      setActiveImageIdx(activeImageIdx + 1);
    }
  };
  const prevImage = () => {
    if (activeProject && activeImageIdx > 0) {
      setActiveImageIdx(activeImageIdx - 1);
    }
  };

  return (
  <section id="portfolio" className="py-24 bg-neutral-100 shadow-elegant border-b border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-center text-primary mb-16 animate-fade-in">
          {t('portfolio.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-none shadow-elegant hover:shadow-hover transition-all duration-500 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter">{project.date}</span>
                </div>
                <p className="font-modern-thin text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="text-primary font-inter text-sm hover:underline" onClick={() => openGallery(project)}>
                  {t('portfolio.view')}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal Gallery */}
        {modalOpen && activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in"
            onClick={closeGallery}
          >
            <div
              className="relative bg-background rounded-lg shadow-lg p-4 md:p-6 w-11/12 max-w-3xl flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
                onClick={closeGallery}
                aria-label={t('portfolio.close')}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeProject.images[activeImageIdx]}
                alt={activeProject.title}
                className="rounded mb-4 max-h-[60vh] md:max-h-[70vh] w-auto"
              />
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={prevImage}
                  disabled={activeImageIdx === 0}
                  className={`p-2 ${activeImageIdx === 0 ? "opacity-30" : "hover:text-primary"}`}
                  aria-label={t('portfolio.previous')}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="font-inter text-sm text-muted-foreground">
                  {activeImageIdx + 1} / {activeProject.images.length}
                </span>
                <button
                  onClick={nextImage}
                  disabled={activeImageIdx === activeProject.images.length - 1}
                  className={`p-2 ${activeImageIdx === activeProject.images.length - 1 ? "opacity-30" : "hover:text-primary"}`}
                  aria-label={t('portfolio.next')}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-2 text-center font-playfair text-lg text-foreground">
                {activeProject.title}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

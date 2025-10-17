import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={logo} alt="PR Design" className="h-16 w-16" />
            <p className="font-inter text-sm text-muted-foreground">
              
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="font-inter text-sm text-muted-foreground">
              © {new Date().getFullYear()} PR Design. {t('footer.rights')}.
            </p>
            <p className="font-inter text-sm text-muted-foreground mt-1">
              España & Europa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

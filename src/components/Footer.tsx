
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-secondary/30 py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-foreground/70 text-sm">
              © {new Date().getFullYear()} Rubisse Schaffer. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-foreground/70 text-sm">
              Web Developer & SEO Consultant
            </p>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

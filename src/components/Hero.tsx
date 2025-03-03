
import React from "react";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <AnimatedSection delay={100} animationDirection="left">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-primary rounded-full mb-6">
                Web Developer & SEO Consultant
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={300} animationDirection="left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Creating <span className="gradient-text">Beautiful</span> & Effective Digital Experiences
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={500} animationDirection="left">
              <p className="text-lg text-foreground/80 mb-8 max-w-xl">
                I specialize in building modern, high-performance websites
                and implementing proven SEO strategies that drive traffic and
                generate leads for businesses.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={700} animationDirection="left">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={scrollToProjects}
                  className="btn-primary flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={scrollToContact}
                  className="btn-secondary"
                >
                  Contact Me
                </button>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection
            className="w-full md:w-1/2 flex justify-center"
            delay={200}
            animationDirection="right"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 animate-float"></div>
              <div className="glassmorphism rounded-2xl overflow-hidden p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Developer working on computer"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;

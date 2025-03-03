
import React from "react";
import AnimatedSection from "./AnimatedSection";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="section-title text-center">About Me</h2>
        </AnimatedSection>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <AnimatedSection
            className="w-full lg:w-2/5"
            animationDirection="left"
            delay={200}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10"></div>
              <div className="glassmorphism rounded-2xl overflow-hidden p-1">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Developer at work"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection
            className="w-full lg:w-3/5"
            animationDirection="right"
            delay={300}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Professional Background</h3>
              <p className="text-lg text-foreground/80 mb-4">
                I am a passionate web developer and SEO specialist with extensive experience in creating 
                responsive, user-friendly websites that not only look great but also perform well 
                in search engines.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Through self-directed learning and hands-on experience, I've developed expertise in 
                front-end and back-end technologies, content optimization, and digital marketing strategies 
                that help businesses increase their online visibility and reach their target audience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60">Experience</span>
                  <span className="text-lg font-medium">5+ Years</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60">Education</span>
                  <span className="text-lg font-medium">Self-taught Professional</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60">Projects</span>
                  <span className="text-lg font-medium">50+ Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-foreground/60">Specialization</span>
                  <span className="text-lg font-medium">Web Development & SEO</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

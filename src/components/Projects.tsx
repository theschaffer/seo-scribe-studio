
import React from "react";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Website Redesign",
      description: "Complete overhaul of an online store with improved UX and SEO optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "WooCommerce"],
      outcomes: ["Increased traffic by 45%", "Improved conversion rate by 30%", "Reduced bounce rate by 25%"],
      link: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Custom property listing website with advanced search and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "AWS"],
      outcomes: ["Streamlined property management", "Increased lead generation by 60%"],
      link: "#"
    },
    {
      title: "SEO Campaign for Local Business",
      description: "Comprehensive SEO strategy for a local service business targeting competitive keywords.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      technologies: ["Keyword Research", "Content Strategy", "Technical SEO", "Local SEO", "Analytics"],
      outcomes: ["#1 ranking for 5 key terms", "250% increase in organic traffic", "48% increase in leads"],
      link: "#"
    },
    {
      title: "Educational Platform",
      description: "Interactive learning platform with course management and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      technologies: ["React", "TypeScript", "Firebase", "Stripe API", "Tailwind CSS"],
      outcomes: ["User retention increased by 40%", "Course completion rate up by 35%"],
      link: "#"
    },
    {
      title: "Mobile-First Restaurant Website",
      description: "Fast-loading, responsive website for a restaurant chain with online ordering system.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "AWS"],
      outcomes: ["Mobile conversions increased by 70%", "Page load time reduced by 65%", "Improved SEO rankings"],
      link: "#"
    },
    {
      title: "Digital Marketing Dashboard",
      description: "Analytics dashboard for tracking and visualizing marketing performance across channels.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["React", "D3.js", "Node.js", "Google Analytics API", "Facebook API"],
      outcomes: ["Centralized multi-channel data", "Reduced reporting time by 85%", "Improved decision making"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="section-title text-center">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-center text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
            Here's a selection of my recent work that showcases my skills in web development
            and SEO optimization.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={300 + index * 100}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                outcomes={project.outcomes}
                link={project.link}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

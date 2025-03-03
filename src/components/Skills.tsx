
import React from "react";
import AnimatedSection from "./AnimatedSection";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => {
  const skillsData = [
    // Frontend
    { name: "HTML5", level: 5, category: "Frontend" },
    { name: "CSS3", level: 5, category: "Frontend" },
    { name: "JavaScript", level: 5, category: "Frontend" },
    { name: "React", level: 4, category: "Frontend" },
    { name: "TypeScript", level: 4, category: "Frontend" },
    { name: "Tailwind CSS", level: 4, category: "Frontend" },
    
    // Backend
    { name: "PHP", level: 4, category: "Backend" },
    { name: "Python", level: 3, category: "Backend" },
    { name: "Node.js", level: 3, category: "Backend" },
    { name: "MySQL", level: 4, category: "Backend" },
    { name: "MongoDB", level: 3, category: "Backend" },
    
    // SEO & Marketing
    { name: "SEO Optimization", level: 5, category: "SEO" },
    { name: "Google Analytics", level: 4, category: "SEO" },
    { name: "Content Strategy", level: 4, category: "SEO" },
    { name: "Technical SEO", level: 5, category: "SEO" },
    { name: "Keyword Research", level: 5, category: "SEO" },
    
    // CMS & Tools
    { name: "WordPress", level: 5, category: "CMS" },
    { name: "Git", level: 4, category: "Tools" },
    { name: "Webpack", level: 3, category: "Tools" },
    { name: "Adobe Photoshop", level: 3, category: "Design" },
    { name: "Figma", level: 4, category: "Design" },
  ];

  // Group skills by category
  const groupedSkills: Record<string, typeof skillsData> = {};
  skillsData.forEach((skill) => {
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });

  const categories = Object.keys(groupedSkills);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="section-title text-center">My Skills</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-center text-lg text-foreground/80 max-w-3xl mx-auto mb-12">
            I've developed expertise across various technologies and disciplines, 
            allowing me to deliver comprehensive solutions from concept to deployment.
          </p>
        </AnimatedSection>
        
        <div className="grid gap-8">
          {categories.map((category, categoryIndex) => (
            <div key={category}>
              <AnimatedSection delay={300 + categoryIndex * 100}>
                <h3 className="text-2xl font-bold mb-6">{category}</h3>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedSkills[category].map((skill, skillIndex) => (
                  <AnimatedSection 
                    key={skill.name} 
                    delay={500 + skillIndex * 50}
                  >
                    <SkillItem
                      name={skill.name}
                      level={skill.level}
                      category={skill.category}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

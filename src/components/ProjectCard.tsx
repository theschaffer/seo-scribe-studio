
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  outcomes?: string[];
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  outcomes,
  link,
  className,
}) => {
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-xl card-hover transition-all duration-300",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-foreground/70 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-secondary text-foreground/80 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {outcomes && outcomes.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Outcomes:</h4>
            <ul className="text-sm text-foreground/70 pl-5 list-disc">
              {outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
        
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-2"
          >
            View Project <ArrowRight size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

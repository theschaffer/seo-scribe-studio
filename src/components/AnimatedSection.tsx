
import React, { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationDirection?: "up" | "left" | "right";
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  animationDirection = "up",
  delay = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-viewport");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  let animationClass = "appear";
  if (animationDirection === "left") {
    animationClass = "animate-fade-in-left opacity-0";
  } else if (animationDirection === "right") {
    animationClass = "animate-fade-in-right opacity-0";
  } else {
    animationClass = "animate-fade-in opacity-0";
  }

  return (
    <div ref={sectionRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;

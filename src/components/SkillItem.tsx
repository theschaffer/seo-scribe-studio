
import React from "react";
import { cn } from "@/lib/utils";

interface SkillItemProps {
  name: string;
  level: number; // 1-5
  category: string;
  className?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  category,
  className,
}) => {
  const levelText = () => {
    switch (level) {
      case 1:
        return "Familiar";
      case 2:
        return "Basic";
      case 3:
        return "Intermediate";
      case 4:
        return "Advanced";
      case 5:
        return "Expert";
      default:
        return "Intermediate";
    }
  };

  return (
    <div
      className={cn(
        "glass p-5 rounded-xl transition-all duration-300 card-hover",
        className
      )}
    >
      <div className="mb-3">
        <span className="text-xs font-medium bg-secondary px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h4 className="text-lg font-medium mb-3">{name}</h4>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full"
            style={{ width: `${(level / 5) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm text-foreground/70">{levelText()}</span>
      </div>
    </div>
  );
};

export default SkillItem;

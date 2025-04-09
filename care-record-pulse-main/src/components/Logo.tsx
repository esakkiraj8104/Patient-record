
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo = ({ size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Activity className="text-medical-purple" size={size === "sm" ? 20 : size === "md" ? 28 : 40} />
      <h1 className={cn("font-bold text-medical-purple tracking-tight", sizeClasses[size])}>
        <span>Patient</span>
        <span className="text-medical-light-purple">Pulse</span>
      </h1>
    </div>
  );
};

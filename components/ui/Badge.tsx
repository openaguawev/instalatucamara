import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "ml" | "success" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    default: "bg-primary text-surface hover:bg-primary/80",
    ml: "bg-badge-ml text-text hover:bg-badge-ml/80",
    success: "bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20",
    outline: "text-text border border-border",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "tech"
  | "tech-outline"
  | "primary"
  | "primary-outline";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
}

// Tailwind classes for variants
const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  primary: "bg-primary text-primary-foreground hover:bg-primary/80",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input shadow hover:shadow-hover bg-background hover:border-primary hover:text-primary",
  ghost: "hover:bg-accent",
  link: "text-primary underline hover:underline",
  tech: "bg-gradient-to-r from-tech-blue to-tech-teal text-white hover:shadow-lg hover:scale-105 transition-all duration-300",
  "tech-outline":
    "border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300",
  "primary-outline":
    "bg-primary text-primary-foreground hover:bg-white hover:text-primary border hover:border-primary",
};

// Tailwind classes for sizes
const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  return (
    <button
      className={cn(`inline-flex items-center
       justify-center gap-2 rounded-md text-sm font-medium
       transition-colors
       ${variantClasses[variant]} ${sizeClasses[size]} ${className}`)}
      {...props}
    />
  );
};

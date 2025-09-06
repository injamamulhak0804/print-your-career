import * as React from "react";
import { cn } from "@/lib/utils";

const FAQ = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { icons?: boolean }
>(({ className, icons = true, ...props }, ref) => (
  <div
    ref={ref}
    data-icons={icons}
    className={cn("space-y-4", className)}
    {...props}
  />
));
FAQ.displayName = "FAQ";

const FAQItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b-2 border-border", className)}
    {...props}
  />
));
FAQItem.displayName = "FAQItem";

const FAQHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex cursor-pointer items-center justify-between p-3",
      className
    )}
    {...props}
  />
));
FAQHeader.displayName = "FAQHeader";

const FAQTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold tracking-tight", className)}
    {...props}
  />
));
FAQTitle.displayName = "FAQTitle";

const FAQContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 pt-0 text-accent text-md", className)}
    {...props}
  />
));
FAQContent.displayName = "FAQContent";

export { FAQ, FAQItem, FAQHeader, FAQTitle, FAQContent };

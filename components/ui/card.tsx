import * as React from "react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const GradientBorderWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [animationIndex, setAnimationIndex] = useState(0);
  
  const gradients = [
    "bg-black",
  ];

  const nextGradient = () => {
    setAnimationIndex((prevIndex: number) => (prevIndex + 1) % gradients.length);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl p-[3px] relative cursor-default",
        gradients[animationIndex],
        className
      )}
      onMouseEnter={nextGradient}
      {...props}
    />
  );
});

GradientBorderWrapper.displayName = "GradientBorderWrapper";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <GradientBorderWrapper>
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-card text-card-foreground transition-transform duration-300 ease-in-out hover:shine cursor-default min-h-[300px] flex flex-col", // Added flex and flex-col
        className
      )}
      {...props}
    />
  </GradientBorderWrapper>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 flex-grow", className)} {...props} /> // Added flex-grow
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

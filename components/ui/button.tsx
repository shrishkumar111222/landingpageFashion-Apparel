"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-white shadow-soft hover:bg-ink-soft hover:shadow-lift hover:-translate-y-0.5",
        gold: "bg-gold-sheen text-white shadow-gold hover:shadow-lift hover:-translate-y-0.5",
        whatsapp:
          "bg-whatsapp text-white shadow-soft hover:bg-whatsapp-dark hover:shadow-lift hover:-translate-y-0.5",
        outline:
          "border border-ink/15 bg-white text-ink hover:border-ink/40 hover:bg-ink hover:text-white hover:-translate-y-0.5",
        ghost: "text-ink hover:bg-muted",
        link: "text-gold-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 text-[0.8rem]",
        default: "h-12 px-7",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

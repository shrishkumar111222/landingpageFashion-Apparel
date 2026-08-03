"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

/**
 * React's drag and animation handlers clash with Framer Motion's identically
 * named props, so they are dropped from the public surface of these wrappers.
 */
type MotionSafeProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onTransitionEnd"
>;

const EASE = [0.22, 1, 0.36, 1] as const;

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export interface RevealProps extends MotionSafeProps {
  /** Direction the element travels in from. */
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Travel distance in pixels before settling. */
  distance?: number;
  as?: "div" | "li" | "section" | "article";
  once?: boolean;
}

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 28,
  as = "div",
  once = true,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] as React.ElementType;

  const offset = offsets[direction];
  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: offset.x * distance, y: offset.y * distance },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: EASE },
        },
      };

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
      variants={variants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export interface RevealGroupProps extends MotionSafeProps {
  stagger?: number;
  delay?: number;
  as?: "div" | "ul" | "ol";
}

/**
 * Parent wrapper that staggers its `RevealChild` descendants. Use for grids
 * where items should cascade in rather than appear all at once.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  as = "div",
  ...props
}: RevealGroupProps) {
  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export interface RevealChildProps extends MotionSafeProps {
  distance?: number;
  as?: "div" | "li" | "article";
}

export function RevealChild({
  children,
  className,
  distance = 24,
  as = "div",
  ...props
}: RevealChildProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] as React.ElementType;

  const variants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      };

  return (
    <MotionTag className={cn(className)} variants={variants} {...props}>
      {children}
    </MotionTag>
  );
}

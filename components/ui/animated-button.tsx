"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { RxChevronRight } from "react-icons/rx";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost-light" | "link" | "link-light";
type Size = "default" | "lg";

const baseClasses =
  "group/btn relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<Variant, string> = {
  primary:
    "rounded-md bg-primary text-primary-foreground shadow-md hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md",
  secondary:
    "rounded-md border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5 active:translate-y-0",
  "ghost-light":
    "rounded-md border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-black hover:-translate-y-0.5 active:translate-y-0",
  link: "text-foreground hover:text-primary",
  "link-light": "text-white hover:text-white/90",
};

const sizeClasses: Record<Size, string> = {
  default: "px-7 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

interface AnimatedButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export function AnimatedButton({
  href,
  variant = "primary",
  size = "default",
  withArrow = false,
  className,
  children,
  onClick,
  type = "button",
  external = false,
}: AnimatedButtonProps) {
  const isLink = variant === "link" || variant === "link-light";
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    !isLink && sizeClasses[size],
    className,
  );

  const inner = (
    <>
      {isLink ? (
        <span className="relative inline-block">
          <span>{children}</span>
          <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/btn:scale-x-100" />
        </span>
      ) : (
        <span>{children}</span>
      )}
      {withArrow && (
        <RxChevronRight className="size-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}

export default AnimatedButton;

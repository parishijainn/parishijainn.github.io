import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

function buttonClassName(variant: Variant) {
  switch (variant) {
    case "primary":
      return cn(
        "border border-accentSoft2 bg-accent text-accentFg shadow-soft",
        "hover:bg-accent/92 hover:-translate-y-0.5 hover:shadow",
        "active:translate-y-0 active:shadow-soft",
      );
    case "secondary":
      return cn(
        "border border-accentSoft bg-surface text-fg shadow-sm",
        "hover:border-accentSoft2 hover:bg-surface2 hover:-translate-y-0.5",
        "active:translate-y-0",
      );
    case "ghost":
      return cn(
        "text-muted hover:text-fg hover:bg-surface2",
        "hover:-translate-y-0.5 active:translate-y-0",
      );
    default:
      return "";
  }
}

export function Button({
  className,
  variant = "secondary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition will-change-transform",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        buttonClassName(variant),
        className,
      )}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  className,
  variant = "secondary",
  children,
  ...props
}: React.ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition will-change-transform",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        buttonClassName(variant),
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}


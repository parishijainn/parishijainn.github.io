import * as React from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  title,
  eyebrow,
  className,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  className?: string;
}) {
  return (
    <div id={id} className={cn("scroll-mt-28", className)}>
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent/35" />
    </div>
  );
}


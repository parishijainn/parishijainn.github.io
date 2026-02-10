import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-accentSoft bg-surface2/60 px-2.5 py-1 text-xs text-muted transition",
        "hover:border-accentSoft2 hover:bg-surface hover:text-fg",
        className,
      )}
      {...props}
    />
  );
}


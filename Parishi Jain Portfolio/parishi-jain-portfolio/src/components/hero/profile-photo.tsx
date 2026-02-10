"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!basePath) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ProfilePhoto({
  alt,
  className,
}: {
  alt: string;
  className?: string;
}) {
  const [errored, setErrored] = React.useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-accentSoft bg-surface shadow-soft",
        "ring-1 ring-accentSoft2",
        className,
      )}
    >
      {!errored ? (
        // Use <img> so missing /public/profile.jpg gracefully falls back
        // without Next.js Image errors/overlay in dev.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={withBasePath("/profile.jpg")}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(80%_80%_at_30%_20%,var(--accentSoft2),transparent_60%),radial-gradient(90%_90%_at_80%_70%,color-mix(in_oklab,var(--fg)_8%,transparent),transparent_60%)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/60 bg-surface2 text-sm font-semibold tracking-tight text-fg">
            PJ
          </div>
        </div>
      )}
    </div>
  );
}


"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-medium tracking-tight text-fg"
          aria-label="Home"
        >
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px] shadow-accent/10 transition group-hover:shadow-accent/20" />
          <span className="text-sm">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-sm text-muted transition hover:text-fg",
                "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accentSoft2 after:transition-transform after:duration-300",
                "hover:after:scale-x-100 focus-visible:after:scale-x-100",
              )}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-surface/60 text-muted backdrop-blur transition hover:border-border hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="pb-4">
          <div className="rounded-2xl border border-border/60 bg-surface/60 p-3 backdrop-blur">
            <nav aria-label="Mobile" className="flex flex-col">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-muted transition hover:bg-bg/60 hover:text-fg"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}


import * as React from "react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";

export function Footer() {
  return (
    <footer aria-labelledby="contact-title" className="py-20 sm:py-24">
      <Container>
        <InView>
          <SectionHeading
            id="contact"
            title={site.contact.title}
            eyebrow="Say hello"
            className="max-w-2xl"
          />
        </InView>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <InView className="lg:col-span-7">
            <Card className="p-7 sm:p-8">
              <h3 id="contact-title" className="text-lg font-semibold text-fg">
                Let’s build something calm and excellent.
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                {site.contact.closing}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {site.contact.links
                  .filter((l) => Boolean(l.href?.trim()))
                  .map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center rounded-full border border-accentSoft bg-surface px-4 py-2 text-sm text-muted transition hover:border-accentSoft2 hover:bg-surface2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    >
                      {l.label}
                    </a>
                  ))}
              </div>

              <p className="mt-6 text-xs text-muted">
                Tip: add your GitHub/LinkedIn URLs in{" "}
                <span className="font-medium text-fg">`src/content/site.ts`</span>.
              </p>
            </Card>
          </InView>

          <InView delay={0.05} className="lg:col-span-5">
            <Card className="p-7 sm:p-8">
              <p className="text-sm text-muted">
                © {new Date().getFullYear()} {site.name}
              </p>
              <p className="mt-3 text-sm text-muted">
                Built with Next.js, Tailwind, and a bias for clarity.
              </p>
              <div className="mt-6 h-px w-full bg-border/70" />
              <p className="mt-6 text-sm text-muted">
                Want to customize sections? Edit content in{" "}
                <span className="font-medium text-fg">`src/content/site.ts`</span>{" "}
                — components will update automatically.
              </p>
            </Card>
          </InView>
        </div>
      </Container>
    </footer>
  );
}


import * as React from "react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function ExperienceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center rounded-full border border-accentSoft bg-surface px-4 py-2 text-sm text-muted transition",
        "hover:border-accentSoft2 hover:bg-surface2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      )}
    >
      {label}
    </a>
  );
}

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="py-20 sm:py-24">
      <Container>
        <InView>
          <SectionHeading
            id="experience"
            title="Experience"
            eyebrow="Where I've worked"
            className="max-w-2xl"
          />
        </InView>

        <div className="mt-10 grid gap-5">
          {site.experience.map((item, idx) => (
            <InView key={`${item.company}-${item.role}`} delay={idx * 0.04}>
              <Card className="relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1 bg-accent/40" />
                <div className="pl-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3
                        id={idx === 0 ? "experience-title" : undefined}
                        className="text-base font-semibold tracking-tight text-fg"
                      >
                        {item.role} • {item.company}
                      </h3>
                      {item.location ? (
                        <p className="mt-1 text-sm text-muted">{item.location}</p>
                      ) : null}
                    </div>
                    <p className="text-sm text-muted">{item.timeframe}</p>
                  </div>

                  {item.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  ) : null}

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-border" />
                        <span className="text-pretty">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {item.links?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.links
                        .filter((l) => Boolean(l.href?.trim()))
                        .map((l) => (
                          <ExperienceLink key={`${item.company}-${l.label}`} href={l.href} label={l.label} />
                        ))}
                    </div>
                  ) : null}
                </div>
              </Card>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}


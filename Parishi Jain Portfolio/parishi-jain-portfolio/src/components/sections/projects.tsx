import * as React from "react";

import { Github, ArrowUpRight } from "lucide-react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function ActionLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accentSoft bg-surface px-3 py-2 text-sm text-muted transition",
        "hover:border-accentSoft2 hover:bg-surface2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      )}
    >
      <span className="text-fg/80">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export function Projects() {
  const featured = site.projects.filter((p) => p.featured);
  const more = site.projects.filter((p) => !p.featured);

  return (
    <section aria-labelledby="projects-title" className="py-20 sm:py-24">
      <Container>
        <InView>
          <SectionHeading
            id="projects"
            title="Projects"
            eyebrow="Selected work"
            className="max-w-2xl"
          />
        </InView>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((p, idx) => {
            const code = p.links?.code?.trim();
            const demo = p.links?.demo?.trim();
            const caseStudy = p.links?.caseStudy?.trim();
            return (
              <InView key={p.name} delay={idx * 0.05}>
                <Card className="group relative h-full">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          id={idx === 0 ? "projects-title" : undefined}
                          className="text-base font-semibold tracking-tight text-fg"
                        >
                          {p.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {p.tagline}
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-2xl border border-accentSoft bg-surface shadow-sm transition group-hover:border-accentSoft2 group-hover:bg-surface2" />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-4 text-sm text-muted">
                      <div>
                        <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted">
                          Problem
                        </p>
                        <p className="mt-2 text-pretty leading-relaxed">
                          {p.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted">
                          Why it’s non-trivial
                        </p>
                        <p className="mt-2 text-pretty leading-relaxed">
                          {p.interesting}
                        </p>
                      </div>
                    </div>

                    {(code || demo || caseStudy) && (
                      <div className="mt-7 flex flex-wrap gap-2">
                        {demo ? (
                          <ActionLink
                            href={demo}
                            label="View Demo"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                          />
                        ) : null}
                        {code ? (
                          <ActionLink
                            href={code}
                            label="View Code"
                            icon={<Github className="h-4 w-4" />}
                          />
                        ) : null}
                        {caseStudy ? (
                          <ActionLink
                            href={caseStudy}
                            label="Case Study"
                            icon={<ArrowUpRight className="h-4 w-4" />}
                          />
                        ) : null}
                      </div>
                    )}

                    {!code && !demo && !caseStudy ? null : null}
                  </div>
                </Card>
              </InView>
            );
          })}
        </div>

        {more.length ? (
          <div className="mt-12">
            <InView>
              <h3 className="text-sm font-medium text-fg">More projects</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {more.map((p, idx) => {
                  const code = p.links?.code?.trim();
                  const demo = p.links?.demo?.trim();
                  const caseStudy = p.links?.caseStudy?.trim();
                  return (
                    <InView key={p.name} delay={idx * 0.04}>
                      <Card className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-medium text-fg">{p.name}</p>
                            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                          </div>
                          <div className="flex gap-2">
                            {demo ? (
                              <a
                                href={demo}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-accentSoft bg-surface p-2 text-muted transition hover:border-accentSoft2 hover:bg-surface2 hover:text-fg"
                                aria-label={`${p.name} demo`}
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            ) : null}
                            {code ? (
                              <a
                                href={code}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-accentSoft bg-surface p-2 text-muted transition hover:border-accentSoft2 hover:bg-surface2 hover:text-fg"
                                aria-label={`${p.name} code`}
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            ) : null}
                            {caseStudy ? (
                              <a
                                href={caseStudy}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-accentSoft bg-surface p-2 text-muted transition hover:border-accentSoft2 hover:bg-surface2 hover:text-fg"
                                aria-label={`${p.name} case study`}
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            ) : null}
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.stack.slice(0, 4).map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                      </Card>
                    </InView>
                  );
                })}
              </div>
            </InView>
          </div>
        ) : null}
      </Container>
    </section>
  );
}


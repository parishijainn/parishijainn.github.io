import * as React from "react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section aria-labelledby="about-title" className="py-20 sm:py-24">
      <Container>
        <InView>
          <SectionHeading
            id="about"
            title={site.about.title}
            eyebrow="Overview"
            className="max-w-2xl"
          />
        </InView>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <InView className="lg:col-span-7">
            <Card className="p-7 sm:p-8">
              <h3 id="about-title" className="text-lg font-semibold text-fg">
                A little context
              </h3>
              <div className="mt-4 space-y-4 text-muted">
                {site.about.body.map((p) => (
                  <p key={p} className="text-pretty leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Card>
          </InView>

          <InView delay={0.05} className="lg:col-span-5">
            <Card className="p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-fg">What I optimize for</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    <span className="text-fg font-medium">Clarity</span> — crisp
                    interfaces, legible hierarchy, and fewer surprises.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    <span className="text-fg font-medium">Reliability</span> —
                    “boring” engineering that holds up under real usage.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                  <span>
                    <span className="text-fg font-medium">Empathy</span> —
                    accessible defaults and thoughtful product decisions.
                  </span>
                </li>
              </ul>
            </Card>
          </InView>
        </div>
      </Container>
    </section>
  );
}


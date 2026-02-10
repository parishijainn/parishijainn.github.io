import * as React from "react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HeroBackground } from "@/components/hero/hero-background";
import { ProfilePhoto } from "@/components/hero/profile-photo";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative py-20 sm:py-28">
        <HeroBackground />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <InView>
              <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-surface px-4 py-2 text-sm text-muted">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/12 text-xs font-semibold text-fg ring-1 ring-accent/18">
                  PJ
                </span>
                <span>{site.locationLine}</span>
              </div>
            </InView>

            <InView delay={0.05} className="mt-8">
              <h1 className="text-pretty text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
                {site.roleLine}
              </p>
            </InView>

            <InView delay={0.1} className="mt-7">
              <p className="max-w-2xl text-pretty leading-relaxed text-muted">
                {site.intro}
              </p>
            </InView>

            <InView delay={0.15} className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={site.ctas.primary.href} variant="primary">
                {site.ctas.primary.label}
              </ButtonLink>
              <ButtonLink href={site.ctas.resume.href} variant="secondary">
                {site.ctas.resume.label}
              </ButtonLink>
              <ButtonLink href={site.ctas.contact.href} variant="secondary">
                {site.ctas.contact.label}
              </ButtonLink>
            </InView>
          </div>

          <InView delay={0.12} className="lg:col-span-4">
            <div className="mx-auto max-w-sm lg:mx-0 lg:max-w-none">
              <ProfilePhoto
                alt="Headshot of Parishi Jain"
                className="aspect-[4/5] w-full sm:aspect-square"
              />
              <p className="mt-4 text-sm text-muted">
                Currently at CMU — interested in agentic AI, accessibility, and building systems that feel clear.
              </p>
            </div>
          </InView>
        </div>

        <InView delay={0.2} className="mt-14">
          <div className="grid gap-3 border-t border-border/60 pt-8 text-sm text-muted sm:grid-cols-3">
            <div>
              <p className="font-medium text-fg">Product-minded</p>
              <p className="mt-1">
                Clear goals, thoughtful tradeoffs, and crisp UX.
              </p>
            </div>
            <div>
              <p className="font-medium text-fg">Systems-aware</p>
              <p className="mt-1">Reliable data, APIs, and maintainable code.</p>
            </div>
            <div>
              <p className="font-medium text-fg">Accessibility-first</p>
              <p className="mt-1">Built for real people, not just screenshots.</p>
            </div>
          </div>
        </InView>
      </Container>
    </section>
  );
}


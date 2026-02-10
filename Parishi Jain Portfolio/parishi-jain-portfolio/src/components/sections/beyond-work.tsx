import * as React from "react";
import {
  Accessibility,
  Sparkles,
  Users,
  Handshake,
  Waves,
  Shapes,
} from "lucide-react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";

function InterestIcon({ name }: { name: (typeof site.beyondWork.items)[number]["icon"] }) {
  const cls = "h-4 w-4 text-accent";
  switch (name) {
    case "accessibility":
      return <Accessibility className={cls} />;
    case "spark":
      return <Sparkles className={cls} />;
    case "users":
      return <Users className={cls} />;
    case "dance":
      return <Waves className={cls} />;
    case "community":
      return <Handshake className={cls} />;
    case "clarity":
      return <Shapes className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

export function BeyondWork() {
  return (
    <section aria-labelledby="beyond-work-title" className="py-20 sm:py-24">
      <Container>
        <InView>
          <SectionHeading
            id="beyond-work"
            title={site.beyondWork.title}
            eyebrow="Interests"
            className="max-w-2xl"
          />
        </InView>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.beyondWork.items.map((item, idx) => (
            <InView key={item.title} delay={idx * 0.04}>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border/60 bg-surface2">
                    <InterestIcon name={item.icon} />
                  </div>
                  <div>
                    <h3
                      id={idx === 0 ? "beyond-work-title" : undefined}
                      className="text-sm font-semibold text-fg"
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}


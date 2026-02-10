import * as React from "react";

import { site } from "@/content/site";
import { InView } from "@/components/motion/in-view";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section aria-labelledby="skills-title" className="py-20 sm:py-24">
      <Container>
        <InView>
          <SectionHeading
            id="skills"
            title="Skills"
            eyebrow="Toolbox"
            className="max-w-2xl"
          />
        </InView>

        <InView delay={0.04} className="mt-8">
          <div className="flex flex-wrap gap-2">
            {site.skillsFocusAreas.map((item) => (
              <Badge
                key={item}
                className="bg-surface border-accentSoft2 text-fg"
              >
                {item}
              </Badge>
            ))}
          </div>
        </InView>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((group, idx) => (
            <InView key={group.title} delay={idx * 0.04}>
              <Card className="group p-6 transition-transform will-change-transform hover:-translate-y-0.5">
                <h3
                  id={idx === 0 ? "skills-title" : undefined}
                  className="text-sm font-semibold text-fg"
                >
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} className="group-hover:border-accentSoft2">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </InView>
          ))}
        </div>
      </Container>
    </section>
  );
}


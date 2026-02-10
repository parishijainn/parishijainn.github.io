import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/content/site";

export default function ResumePage() {
  return (
    <main className="py-16 sm:py-20">
      <Container>
        <Card className="p-7 sm:p-10">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Resume
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {site.name}
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted">
            Add your PDF at <span className="font-medium text-fg">`/public/resume.pdf`</span>{" "}
            and this page can link directly to it.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="/resume.pdf" variant="primary">
              Download PDF
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              Back to home
            </ButtonLink>
          </div>

          <p className="mt-8 text-sm text-muted">
            Prefer a different URL? Update <span className="font-medium text-fg">`site.ctas.resume.href`</span>{" "}
            in <span className="font-medium text-fg">`src/content/site.ts`</span>.
          </p>

          <div className="mt-8 h-px w-full bg-border/70" />
          <p className="mt-6 text-sm text-muted">
            If you’d like, I can also style this page as an inline resume (HTML) for better SEO, with a PDF download
            as a secondary option.
          </p>
        </Card>

        <p className="mt-8 text-sm text-muted">
          Or just email me at{" "}
          <Link className="text-fg underline decoration-border hover:decoration-fg" href="mailto:parishijain@cmu.edu">
            parishijain@cmu.edu
          </Link>
          .
        </p>
      </Container>
    </main>
  );
}


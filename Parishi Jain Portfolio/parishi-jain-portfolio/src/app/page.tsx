import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { BeyondWork } from "@/components/sections/beyond-work";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <About />
      <BeyondWork />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}

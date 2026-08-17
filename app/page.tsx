import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Hero />
      <Separator className="my-12" />
      <About />
      <Separator className="my-12" />
      <Experience />
      <Separator className="my-12" />
      <Projects />
      <Separator className="my-12" />
      <Contact />
    </main>
  );
}

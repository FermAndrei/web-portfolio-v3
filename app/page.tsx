import Hero from "@/components/Hero";
import About from "@/components/About";
import { MyInfo } from "@/components/data/MyInfo";
import Work from "@/components/Work";
import Project from "@/components/Project";
import { ProjectData } from "@/components/data/ProjectData";
import Skills from "@/components/Skills";

export default function Home() {
  const { aboutMeDesc, careerStats, techStacks } = MyInfo;

  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About aboutMeDesc={aboutMeDesc} careerStats={careerStats} />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="project">
        <Project data={ProjectData} />
      </section>
      <section id="tool">
        <Skills data={techStacks} />
      </section>
    </>
  );
}

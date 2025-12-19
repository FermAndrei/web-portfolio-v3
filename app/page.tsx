import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
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
      <Nav />
      <Hero />
      <About aboutMeDesc={aboutMeDesc} careerStats={careerStats} />
      <Work />
      <Project data={ProjectData} />
      <Skills data={techStacks} />
    </>
  );
}

import Hero from "@/pages/Hero";
import About from "@/pages/About";
import { MyInfo } from "@/components/data/MyInfo";
import Work from "@/pages/Work";
import Project from "@/pages/Project";
import { ProjectData } from "@/components/data/ProjectData";
import Skills from "@/pages/Skills";
import Footer from "@/pages/Footer";

export default function Home() {
  const { aboutMeDesc, careerStats, techStacks } = MyInfo;

  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="bg-gray-100/20">
        <About aboutMeDesc={aboutMeDesc} careerStats={careerStats} />
      </section>
      <section id="tool" className="bg-gray-100/20">
        <Skills data={techStacks} />
      </section>
      <section id="work" className="bg-hex">
        <Work />
      </section>
      <section id="project">
        <Project data={ProjectData} />
      </section>
      <Footer />
    </>
  );
}

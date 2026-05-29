import Hero from "@/ui_components/Hero";
import About from "@/ui_components/About";
import { MyInfo } from "@/components/data/MyInfo";
import Work from "@/ui_components/Work";
import Project from "@/ui_components/Project";
import { ProjectData } from "@/components/data/ProjectData";
import Skills from "@/ui_components/Skills";
import Footer from "@/ui_components/Footer";

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

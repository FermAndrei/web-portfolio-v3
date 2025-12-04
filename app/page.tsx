import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import { MyInfo } from "@/components/data/MyInfo";

export default function Home() {
  const { aboutMeDesc, careerStats } = MyInfo;

  return (
    <>
      <Nav />
      <Hero />
      <About aboutMeDesc={aboutMeDesc} careerStats={careerStats} />
    </>
  );
}

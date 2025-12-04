"use client";

import CountUp from "./CountUp";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

type CareerStat = {
  id: number;
  icon: string;
  value: number;
  label: string;
  color: string;
};

type AboutProps = {
  careerStats: CareerStat[];
  aboutMeDesc: string;
};

const About = ({ careerStats, aboutMeDesc }: AboutProps) => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];
  return (
    <>
      <div
        className="border-y max-w-[1000px] mx-auto"
        style={{ height: 100, position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={80}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <div className="mx-auto max-w-[1000px]">
        <h1>About Me</h1>
        <p>{aboutMeDesc}</p>
        <div className="grid grid-cols-4 gap-4">
          {careerStats.map((stat) => (
            <div key={stat.id} className={`border rounded-lg p-4`}>
              <span>{stat.icon}</span>
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              {stat.label === "Experience" && <span> Years</span>}
              {stat.label === "Technologies" && <span>+</span>}
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;

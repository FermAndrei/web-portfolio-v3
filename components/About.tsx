"use client";

import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const About = () => {
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
    <div
      className="max-w-[1300px] mx-auto border-y"
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
  );
};

export default About;

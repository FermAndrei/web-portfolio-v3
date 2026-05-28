"use client";

import CountUp from "../components/CountUp";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiFlutter,
  SiDart,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "../components/LogoLoop";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type CareerStat = {
  id: number;
  icon: string;
  value: number;
  label: string;
};

type AboutProps = {
  careerStats: CareerStat[];
  aboutMeDesc: string;
};

const About = ({ careerStats, aboutMeDesc }: AboutProps) => {
  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
    },
    { node: <SiJavascript />, title: "Javascript" },
    { node: <SiHtml5 />, title: "Html" },
    {
      node: <SiBootstrap />,
      title: "Bootstrap",
    },
    { node: <SiCss3 />, title: "Css" },
    { node: <SiFlutter />, title: "Flutter" },
    {
      node: <SiDart />,
      title: "Dart",
    },
  ];
  return (
    <>
      {/* <div
        className="max-w-7xl mt-5 mx-auto text-slate-300"
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
          ariaLabel="Technology partners"
        />
      </div> */}
      <div className="relative gap-4 mx-auto max-w-7xl px-4 md:px-8 lg:px-12 pt-12 md:pt-8 lg:pt-12">
        <h1 className="text-center col-span-2 text-3xl lg:text-5xl font-extrabold">
          About Me
        </h1>
        <hr className="line" />
        <p className="text-slate-400 text-center text-md md:text-base lg:text-xl font-semibold">
          Here, you'll discover additional details about me, my professional
          skills, and projects
        </p>
        <div className="flex md:flex-row flex-col gap-5 lg:gap-16 items-center justify-center mx-auto max-w-5xl mt-5 lg:mt-10">
          <div className="flex flex-col items-center shrink-0 p-4">
            <img
              src="../OIP.jpg"
              alt=""
              className="rounded-full w-[260px] h-[260px] md:w-[270px] md:h-[270px] lg:w-[280px] lg:h-[280px] object-cover shadow-[0_0_20px_8px_rgba(39,234,254,0.8)] mb-6"
            />
            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/fermandrei/",
                    "_blank",
                  )
                }
                className="border-cyan-500/50 hover:bg-cyan-700 hover:text-white transition-colors"
              >
                <FaLinkedin />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/FermAndrei", "_blank")
                }
                className="border-cyan-500/50 hover:bg-cyan-700 hover:text-white transition-colors"
              >
                <FaGithub />
                Github
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <p className="whitespace-pre-line leading-relaxed text-slate-600 text-base md:text-md lg:text-lg font-medium">
              {aboutMeDesc}
            </p>
          </div>
        </div>
        <hr className="border-t mt-5 border-t-cyan-500/50 mask-[linear-gradient(to_right,transparent,black,transparent)]" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-0 max-w-5xl mx-auto md:divide-x md:divide-cyan-500/20 mt-5">
          {careerStats.map((stat) => (
            <div
              key={stat.id}
              className="flex-1 flex-col items-center justify-center text-center"
            >
              <div className="flex items-center justify-center">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  duration={1}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400"
                />
                {stat.label === "Technologies" && (
                  <span className="ml-1 text-lg font-bold text-cyan-400">
                    +
                  </span>
                )}
              </div>

              <p className="text-md md:text-base lg:text-xl font-bold text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;

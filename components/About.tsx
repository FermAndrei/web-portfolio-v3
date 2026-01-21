"use client";

import CountUp from "./CountUp";
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
import LogoLoop from "./LogoLoop";

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
      <div className="gap-4 mx-auto max-w-7xl mt-15">
        <h1 className="text-center col-span-2 text-3xl lg:text-4xl font-extrabold mb-6 text-white">
          About Me
        </h1>
        <hr className="line" />
        <p className="text-white text-center font-semibold mt-6 text-md md:text-base lg:text-lg">
          Here, you'll discover additional details about me, my professional
          skills, and projects
        </p>
        <div className="grid lg:grid-cols-2 gap-4 mx-auto max-w-7xl mt-6 p-5">
          <p className="backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 bg-neutral-800/50 border border-cyan-500/20 whitespace-pre-line leading-relaxed text-white text-md md:text-base lg:text-lg font-normal">
            {aboutMeDesc}
          </p>
          {/* <div className="relative ">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div> */}
          <div className="grid grid-cols-2 gap-4">
            {careerStats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center text-center
        rounded-lg px-6 py-4 font-medium
        text-slate-100
        bg-neutral-800/50
        backdrop-blur-md backdrop-saturate-150
        border border-cyan-500/20"
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

                <p className="mt-2 text-md md:text-base lg:text-xl font-bold text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

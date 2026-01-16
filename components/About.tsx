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
import Image from "next/image";

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
      <div className="gap-2 mx-auto max-w-7xl mt-10 ">
        <div className="mx-4 rounded-lg bg-neutral-800/30 backdrop-blur-md backdrop-saturate-150 p-5">
          <h1 className="text-center col-span-2 mx-auto text-3xl font-extrabold mb-4 text-white">
            ABOUT ME
          </h1>
          <p className="whitespace-pre-line leading-relaxed text-white text-lg">
            {aboutMeDesc}
          </p>
          {/* <div className="relative ">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div> */}
          <div className="grid gap-4 p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {careerStats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-start rounded-lg px-6 py-4 font-medium
             text-white dark:text-black
             bg-neutral-800/30 dark:bg-white/70
             backdrop-blur-md backdrop-saturate-150
             border border-white/5"
              >
                <div className="flex items-center">
                  {/* <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={35}
                  height={35}
                  className="mr-2"
                /> */}
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-2xl font-bold"
                  />
                  {stat.label === "Technologies" && (
                    <span className="text-lg font-bold">+</span>
                  )}
                </div>
                <p className="text-lg font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

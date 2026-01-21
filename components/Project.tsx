"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ExpandableText from "./ui/ExpandableText";
import StarBorder from "./StarBorder";

export type ProjectData = {
  slug: string;
  id: number;
  name: string;
  description: string;
  type: string;
  thumbnail: string;
  date: string;
  techUse: string[];
  projectLink: string;
  gitHub: string;
  liveDemo: boolean;
};

const Project = ({ data }: { data: ProjectData[] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? data : data.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto mt-15">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl text-white font-extrabold max-w-4xl mb-6 mx-auto">
          Projects
        </h2>
        <hr className="line" />
        <p className="text-white text-md md:text-base lg:text-lg max-w-sm mx-auto mt-6 mb-10 font-semibold">
          Here you will find some of the personal projects I created.
        </p>
      </div>

      {/* Grid wrapper for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <CardContainer key={project.id} className="inter-var h-full">
            <CardBody className="bg-neutral-800/50 relative min-h-[500px] group/card border-cyan-500/20 w-full h-full rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="div"
                translateZ="60"
                className="text-base max-w-sm mt-2 text-neutral-300"
              >
                <ExpandableText description={120}>
                  {project.description}
                </ExpandableText>
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={project.thumbnail}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex gap-2 items-center mt-3 text-white">
                {project.liveDemo === true ? (
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.projectLink}
                    target="__blank"
                    className=" py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Live Demo
                  </CardItem>
                ) : null}
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.gitHub}
                  target="__blank"
                  className=" py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Github
                </CardItem>
              </div>
              <div className="flex flex-wrap items-center gap-1 mt-2">
                <span className="text-xs text-white">Tech Use:</span>
                {project.techUse.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-neutral-800/30 text-slate-100 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {data.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
        px-8 py-3 rounded-lg font-semibold
        text-white
        bg-neutral-800/40
        backdrop-blur-md backdrop-saturate-150
        border border-cyan-500/20
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-neutral-700/40
      "
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;

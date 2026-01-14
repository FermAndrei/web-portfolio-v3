import React from "react";
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
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center">
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl mx-auto">
          Projects
        </h2>
        <p className="text-neutral-300 dark:text-neutral-300 text-sm md:text-base max-w-sm mx-auto">
          Here you will find some of the personal projects I created.
        </p>
      </div>

      {/* Grid wrapper for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <CardContainer key={project.id} className="inter-var h-full">
            <CardBody className="bg-neutral-800/30 relative min-h-[500px] group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="div"
                translateZ="60"
                className="text-sm max-w-sm mt-2 text-neutral-300"
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
    </div>
  );
};

export default Project;

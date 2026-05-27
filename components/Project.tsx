"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ExpandableText from "./ui/ExpandableText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaGithub, FaGlobe } from "react-icons/fa";

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
    <div className="max-w-7xl mx-auto py-4 md:p-7 lg:p-10">
      <div className="text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold max-w-4xl mb-6 mx-auto">
          Projects
        </h2>
        <hr className="line mb-6" />
        <p className="text-slate-400 text-center text-md md:text-base lg:text-xl font-semibold">
          Here you will find some of the personal projects I created.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 mt-10 relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 flex items-stretch">
            {data.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex"
              >
                <div className="w-full my-2 flex flex-col flex-grow">
                  <CardContainer className="inter-var w-full h-full">
                    <CardBody className="bg-slate-200/40 relative min-h-[520px] group/card w-full h-full rounded-xl p-6 border flex flex-col items-stretch">
                      <div className="flex flex-col flex-1">
                        <CardItem
                          translateZ="50"
                          className="text-2xl font-bold w-full"
                        >
                          {project.name}
                        </CardItem>

                        <CardItem
                          as="div"
                          translateZ="60"
                          className="text-md w-full mt-2 text-slate-600 font-semibold min-h-[60px]"
                        >
                          <ExpandableText description={100}>
                            {project.description}
                          </ExpandableText>
                        </CardItem>

                        <CardItem translateZ="100" className="w-full mt-4">
                          <img
                            src={project.thumbnail}
                            className="h-52 w-full border-cyan-500/20 border object-cover rounded-xl group-hover/card:shadow-xl"
                            alt={`${project.name} thumbnail`}
                          />
                        </CardItem>
                      </div>

                      <div className="mt-auto">
                        <div className="flex gap-2 items-center h-6 mt-6 mb-2">
                          {project.liveDemo === true ? (
                            <CardItem
                              translateZ={20}
                              as="a"
                              href={project.projectLink}
                              target="__blank"
                              className="flex items-center gap-1 hover:underline decoration-cyan-500 text-slate-700 py-2 rounded-xl text-sm font-normal "
                            >
                              <FaGithub />
                              Live Demo
                            </CardItem>
                          ) : null}
                          <hr />
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={project.gitHub}
                            target="__blank"
                            className="flex items-center gap-1 hover:underline decoration-cyan-500 text-slate-700 py-2 rounded-xl text-sm font-normal"
                          >
                            <FaGlobe />
                            Github
                          </CardItem>
                        </div>

                        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-cyan-700/30">
                          <span className="text-[11px] text-neutral-400 block w-full mb-1">
                            Tech Used:
                          </span>
                          {project.techUse.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-0.5 text-[11px] font-medium rounded-sm text-cyan-500 border border-cyan-700/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-10">
            <CarouselPrevious className="static md:absolute translate-y-0 text-cyan-400 border-cyan-500/50 hover:bg-cyan-700 hover:text-white transition-colors" />
            <CarouselNext className="static md:absolute translate-y-0 text-cyan-400 border-cyan-500/50 hover:bg-cyan-700 hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Project;

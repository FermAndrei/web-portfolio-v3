import React from "react";
import Footer from "@/ui_components/Footer";

type MySkill = {
  id: number;
  name: string;
  icon: string;
};
const Skills = ({ data }: { data: MySkill[] }) => {
  return (
    <div className="max-w-7xl mx-auto relative z-0 py-12 md:px-6 px-2">
      <h1 className="text-center text-slate-600 col-span-2 text-xl lg:text-3xl font-extrabold">
        Tech Stacks
      </h1>
      <hr className="line" />

      <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
        {data.map((skills) => (
          <div
            key={skills.id}
            className="flex items-center justify-center gap-1 group cursor-pointer py-1 px-2 bg-slate-200/40 backdrop-blur-sm border rounded-md shadow-sm transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-slate-100/50 rounded-md transition-colors duration-300 group-hover:bg-cyan-500/10">
              <img
                src={skills.icon}
                alt={skills.name}
                className="w-6 h-6 md:w-8 md:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <span className="text-xs md:text-sm font-medium text-center tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-cyan-500">
              {skills.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

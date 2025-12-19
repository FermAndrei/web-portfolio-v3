import React from "react";

type MySkill = {
  id: number;
  name: string;
  icon: string;
};
const Skills = ({ data }: { data: MySkill[] }) => {
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="text-center mb-8">
        <h2 className="text-lg md:text-4xl mb-3 text-black dark:text-white">
          Tools
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md mx-auto">
          These are the technologies and tools I use to build modern,
          responsive, and user-focused web and mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-7 gap-4 justify-items-center max-w-[1000px] mx-auto">
        {data.map((skills) => (
          <div
            key={skills.id}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ">
              <img
                src={skills.icon}
                alt={skills.name}
                className="w-7 h-7 md:w-15 md:h-15"
              />
            </div>

            <span className="text-[11px] md:text-xs text-neutral-600 dark:text-neutral-300 font-medium text-center leading-tight transition-colors duration-300 group-hover:text-[#14B8A6]">
              {skills.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

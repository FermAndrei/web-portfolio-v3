import React from "react";
import Footer from "@/components/Footer";

type MySkill = {
  id: number;
  name: string;
  icon: string;
};
const Skills = ({ data }: { data: MySkill[] }) => {
  return (
    <div className="max-w-7xl mx-auto mt-15">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-white">
          Tools
        </h2>
        <hr className="line" />
        <p className="text-white text-base md:text-lg max-w-lg mx-auto mt-6 mb-10 font-semibold">
          These are the technologies and tools I use to build modern,
          responsive, and user-focused web and mobile applications.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center max-w-[1000px] mx-auto mb-20">
        {data.map((skills) => (
          <div
            key={skills.id}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center ">
              <img
                src={skills.icon}
                alt={skills.name}
                className="w-10 h-10 md:w-15 md:h-15"
              />
            </div>

            <span className="text-[11px] md:text-md font-semibold text-white text-center leading-tight transition-colors duration-300 group-hover:text-[#14B8A6]">
              {skills.name}
            </span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Skills;

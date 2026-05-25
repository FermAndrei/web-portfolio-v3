import React from "react";
import Footer from "@/components/Footer";

type MySkill = {
  id: number;
  name: string;
  icon: string;
};
const Skills = ({ data }: { data: MySkill[] }) => {
  return (
    <div className="max-w-7xl mx-auto relative z-0 py-12 ">
      {/* <div className="text-center mb-8">
        <h2 className="mb-6 text-3xl lg:text-5xl font-extrabold">Tools</h2>
        <hr className="line" />
        <p className="text-slate-400 text-center text-md md:text-base lg:text-xl font-semibold max-w-xl mx-auto mt-6 mb-10">
          These are the technologies and tools I use to build modern,
          responsive, and user-focused web and mobile applications.
        </p>
      </div> */}

      <div className="grid grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center max-w-[1000px] p-4 lg:p-0 mx-auto">
        {data.map((skills) => (
          <div
            key={skills.id}
            className="flex flex-col items-center justify-center gap-3 group cursor-pointer w-full p-2 md:p-4 bg-slate-200/40 backdrop-blur-sm border rounded-2xl shadow-sm transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1"
          >
            {/* Icon Container: Forced to be a perfect square and perfectly centered */}
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-slate-100/50 rounded-xl transition-colors duration-300 group-hover:bg-cyan-500/10">
              <img
                src={skills.icon}
                alt={skills.name}
                className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text Label */}
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

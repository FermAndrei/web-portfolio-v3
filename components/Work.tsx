import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Work = () => {
  const data = [
    {
      title: "Feb 2024 - Sept 2025",
      content: (
        <div className="max-w-2xl bg-[#142340]/60 backdrop-blur-md text-slate-200 p-6 rounded-2xl mb-4 border border-b-4 border-b-white border-slate-700/50 shadow-xl relative overflow-hidden group transition-all duration-300">
          <div
            key={0}
            className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"
          />
          <ul className="space-y-4 text-sm md:text-base leading-relaxed text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Build and enhance features based on business requirements.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Integrated API endpoints for loan features, including{" "}
                <strong className="text-white font-medium">
                  SSS validation
                </strong>{" "}
                and fee structure, improving loan processing speed by{" "}
                <strong className="text-cyan-400 font-semibold">20%</strong>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Used caching to improve the app’s load time by{" "}
                <strong className="text-cyan-400 font-semibold">22%</strong>,
                ensuring a smoother and faster startup experience for users.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Collaborated with QA and provided support during{" "}
                <strong className="text-white font-medium">
                  System Integration Testing (SIT)
                </strong>{" "}
                and{" "}
                <strong className="text-white font-medium">
                  User Acceptance Testing (UAT)
                </strong>{" "}
                cycles to resolve bugs and improve product quality.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "April 2023 - May 2023",
      content: (
        <div
          key={1}
          className="max-w-2xl bg-[#142340]/60 backdrop-blur-md text-slate-200 p-6 rounded-2xl border border-b-4 border-b-white border-slate-700/50 shadow-xl relative overflow-hidden group transition-all duration-300"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
          <ul className="space-y-4 text-sm md:text-base leading-relaxed text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Developed a CRUD Web Application using Sencha EXT JS following
                the MVVC architecture.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Gained hands-on experience in frontend development and working
                with JavaScript framework.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Worked on implementing data management, user interactions, and
                UI components.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>
                Collaborated with the other trainee to debug, test, and refine
                application features.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Work;

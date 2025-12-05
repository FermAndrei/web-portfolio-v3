import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Work = () => {
  const data = [
    {
      title: "Feb 2024 - Sept 2025",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Build and enhance features based on business requirements.
          </p>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Integrated API endpoints for loan features, including SSS
            validation and fee structure, improving loan processing speed by
            20%.
          </p>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Used caching to improve the app’s load time by 22%, ensuring a
            smoother and faster startup experience for users.
          </p>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Collaborated with QA and provided support during System
            Integration Testing (SIT) and User Acceptance Testing (UAT) cycles
            to resolve bugs and improve product quality.
          </p>
        </div>
      ),
    },
    {
      title: "April 2023 - May 2023",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Developed a CRUD Web Application using Sencha EXT JS following the
            MVVC architecture.
          </p>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Gained hands-on experience in frontend development and working
            with JavaScript framework.
          </p>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Worked on implementing data management, user interactions, and UI
            components.
          </p>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Collaborated with the other trainee to debug, test, and refine
            application features.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-[1000px] mt-5 mx-auto">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Work;

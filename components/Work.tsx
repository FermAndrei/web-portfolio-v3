import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Work = () => {
  const data = [
    {
      title: "Feb 2024 - Sept 2025",
      content: (
        <div>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Build and enhance features based on business requirements.
          </p>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Integrated API endpoints for loan features, including SSS
            validation and fee structure, improving loan processing speed by
            20%.
          </p>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Used caching to improve the app’s load time by 22%, ensuring a
            smoother and faster startup experience for users.
          </p>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
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
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Developed a CRUD Web Application using Sencha EXT JS following the
            MVVC architecture.
          </p>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Gained hands-on experience in frontend development and working
            with JavaScript framework.
          </p>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Worked on implementing data management, user interactions, and UI
            components.
          </p>
          <p className="mb-2 text-md md:text-base lg:text-lg font-normal text-white">
            - Collaborated with the other trainee to debug, test, and refine
            application features.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-15">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Work;

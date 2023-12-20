import * as React from "react";
import useFullScreenBlockWrapperHook from "../../../hooks/useFullScreenBlockWrapperHook";
import Button from "../../../common/button";

const AboutMeBlock = () => {
  return (
    <>
      {useFullScreenBlockWrapperHook({
        className: "items-stretch",
        children: (
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <div className="flex w-1/2 justify-center align-center">
                <img
                  src="/assets/images/profile.jpg"
                  className="w-full  border-4 border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="flex flex-col gap-5 w-1/2 justify-center align-center">
                <ul className="flex gap-5 flex-col">
                  <li>
                    <h3 className="text-4xl">
                      <span className="font-bold">6+ years</span> of experience
                      in
                      <span className="font-bold"> front-end</span> development
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-4xl">
                      <span className="font-bold">4+ years</span> of expertise
                      in
                      <span className="font-bold"> back-end</span> and database
                      architecture
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-4xl">
                      Proficient in building complex projects
                      <span className="font-bold"> from zero</span>
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-4xl">
                      <span className="font-bold">1000+ bugs</span> of various
                      complexities
                      <span className="font-bold"> resolved</span>
                    </h3>
                  </li>
                </ul>
                <Button buttonContent={"Learn more"} onClick={() => {}} />
              </div>
            </div>
          </div>
        ),
      })}
    </>
  );
};

export default AboutMeBlock;

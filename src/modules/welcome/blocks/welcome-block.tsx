import * as React from "react";
import Button from "../../../common/button";
import useFullScreenBlockWrapperHook from "../../../hooks/useFullScreenBlockWrapperHook";

const WelcomeBlock = () => {
  return (
    <>
      {useFullScreenBlockWrapperHook({
        children: (
          <>
            <h1 className={"text-5xl text-center font-extrabold mb-5"}>
              Crafting Digital Excellence, One Stack at a Time.
            </h1>
            <p className="w-[50%] text-center mb-9">
              I am a full-stack developer who loves to build web applications
              using <span className={"font-bold"}>React</span>,{" "}
              <span className={"font-bold"}>TypeScript</span>,{" "}
              <span className={"font-bold"}> Node.js</span>, and{" "}
              <span className={"font-bold"}>Java</span>.
            </p>
            <div className="flex flex-row space-x-4">
              <Button buttonContent={"Contact Me"} onClick={() => {}} />
              <Button buttonContent={"View My Work"} onClick={() => {}} />
            </div>
          </>
        ),
      })}
    </>
  );
};

export default WelcomeBlock;

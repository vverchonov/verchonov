import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const useFullScreenBlockWrapperHook = (props: Props) => {
  return (
    <div
      className={
        "w-100 h-screen flex dark:bg-black dark:text-white items-center justify-center flex-col " +
        props.className
      }
    >
      {props.children}
    </div>
  );
};

export default useFullScreenBlockWrapperHook;

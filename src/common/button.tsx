import * as React from "react";

type Props = {
  onClick: () => void;
  buttonContent: string | JSX.Element;
};

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="text-white w-fit bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      {props.buttonContent}
    </button>
  );
};

export default Button;

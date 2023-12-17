import * as React from "react";
import Button from "../../../common/button";

const ToggleThemeButton = () => {
  const onClick = () => {
    if (isDarkMode()) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.toggle("dark");
    }
  };

  const isDarkMode = () => {
    return document.documentElement.classList.contains("dark");
  };

  return <Button onClick={onClick} buttonContent={"D/L"} />;
};

export default ToggleThemeButton;

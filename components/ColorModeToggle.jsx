import React from "react";
import useDarkMode from "./useDarkMode";

import { TbMoonFilled } from "react-icons/tb";
import { HiSun } from "react-icons/hi";

const ColorModeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button aria-label="Toggle colormode" onClick={() => setTheme(colorTheme === "light" ? "dark" : "light")}
      className="cursor-pointer dark:ring-white dark:bg-[#4f4f4f] hover:ring-[2px] transition-all ring-black p-2 bg-gray-200 rounded-lg">

      {colorTheme === "light" ? (
        <HiSun size={20} /> ) : (
        <TbMoonFilled size={20} />
      )}
    </button>
  );
};

export default ColorModeToggle;
import React from "react";
import ColorModeToggle from "/components/ColorModeToggle";

const Header = () => {
  return (
    <header className="fixed w-full z-30 dark:bg-[rgba(17, 17, 17,0.29)] bg-[rgba(249, 250, 251,0.30)] backdrop-blur-lg overflow-y-auto">

      {/* HEADER/NAVBAR TOP ITEMS */}
      <div className="mx-auto max-w-[58rem]">

        <nav className="flex items-center gap-1 text-base m-6">

          {/* COMPANY TEXT DISPLAY */}
          <h2 className="font-bold text-xl flex items-center notranslate ml-2">{" "} STUDIOS&thinsp;D'ROSE{" "}</h2>
          {/* CONTENST FLEX DISPLAY */}
          <div className="flex-1"></div>
          {/* THEME BUTTON DISPLAY */}
          <div className="justify-end"> <ColorModeToggle /> </div>

        </nav>
      </div>

    </header>
  );
};
export default Header;

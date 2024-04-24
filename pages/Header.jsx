import React from "react";
import ColorModeToggle from "/components/ColorModeToggle";

const Header = () => {
  return (
    <header className="fixed w-full pq2 z-50 dark:bg-[rgba(17, 17, 17,0.29)] bg-[rgba(249, 250, 251,0.30)] backdrop-blur-lg header overflow-y-auto">

      {/* HEADER/NAVBAR TOP ITEMS */}
      <div className="mx-auto max-w-4xl">
        <nav className="flex items-center gap-1 text-base m-6">

          {/* COMPANY TEXT DISPLAY */}
          <h2 className="font-bold text-xl flex items-center notranslate margin-title ml-[2px]">{" "}
            D'ROSE&thinsp;STUDIOS{" "}
          </h2>

          <div className="flex-1"></div>

          {/* THEME BUTTON DISPLAY */}
          <div className="justify-end margin-button">
            <ColorModeToggle />
          </div>

        </nav>
      </div>
    </header>
  );
};
export default Header;

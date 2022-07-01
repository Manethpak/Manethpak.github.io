import React from "react";
import ThemeToggle from "../components/themeToggle/ThemeToggle";
import IndexView from "src/components/views/IndexView";

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <div
        className="bg-gradient-to-b from-white to-violet-200
      dark:bg-gradient-to-b dark:from-primary-200 dark:to-primary-400 w-screen h-screen text-primary-400 dark:text-gray-100 snap-both snap-mandatory overflow-y-scroll"
      >
        <IndexView />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;

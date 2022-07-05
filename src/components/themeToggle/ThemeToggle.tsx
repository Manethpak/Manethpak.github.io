import React from "react";
import { motion } from "framer-motion";

import useTheme from "../../util/useTheme";
import { MoonIcon, SunIcon } from "../icons";

const ThemeToggle = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <motion.button
      onClick={switchTheme}
      className="fixed bottom-4 right-4 md:bottom-10 md:right-16 p-2 rounded-full bg-primary-100 dark:bg-white outline-none"
      whileTap={{ y: "8px" }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2 }}
    >
      {theme === "dark" ? (
        <SunIcon className="w-8 h-8 text-primary-400" />
      ) : (
        <MoonIcon className="w-8 h-8 text-white" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;

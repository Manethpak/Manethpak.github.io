import React from "react";
import { motion } from "framer-motion";
import { EmailIcon, GithubIcon, LinkedinIcon } from "../icons";
import useDarkmode from "src/util/useDarkmode";

const Contact = () => {
  const { theme } = useDarkmode();
  console.log(theme);
  const list = [
    {
      icon: GithubIcon,
      href: "https://github.com/manethpak",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/maneth-pak/",
    },
    {
      icon: EmailIcon,
      href: "mailto:manethpak00@gmail.com",
    },
  ];

  return (
    <div className="fixed left-0 bottom-5 lg:bottom-0 lg:left-20">
      <ul className="flex flex-row-reverse lg:flex-col items-center gap-2">
        {list.map((item) => (
          <>
            <motion.li
              className=" dark: cursor-pointer flex items-center justify-center"
              whileHover={{ scale: 1.3, height: "60px" }}
            >
              <a href={item.href} target="_blank" rel="noreferrer">
                <item.icon className="w-10 h-10 text-primary-100 hover:text-primary-400 dark:text-gray-400 dark:hover:text-white transition-colors" />
              </a>
            </motion.li>
            <li className="w-10 lg:w-0 lg:h-10 border border-gray-400"></li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Contact;

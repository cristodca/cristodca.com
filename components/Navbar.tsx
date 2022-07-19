import { NextComponentType } from "next";
import React, { useEffect, useState } from "react";
import { checkDarkMode, toggleDarkMode } from "../helpers/darkMode";
import IconGithub from "./icons/Github";
import IconLinkedin from "./icons/Linkedin";
import IconTwitter from "./icons/Twitter";

const Navbar: NextComponentType = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);

  useEffect(() => {
    if (!checkDarkMode()) setIsDarkModeEnabled(false);
  }, []);

  return (
    <nav className="bg-light text-dark font-medium text-lg dark:bg-dark dark:text-light">
      <div className="main-container border-b border-b-dark py-4 dark:border-b-light">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden md:block">
              @cristodca
            </span>
            <a
              href="https://mx.linkedin.com/in/cristodca"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-dark inline-block hover:fill-primary dark:fill-light dark:hover:fill-secondary"
            >
              <IconLinkedin />
            </a>
            <a
              href="https://github.com/cristodca"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-dark inline-block hover:fill-primary dark:fill-light dark:hover:fill-secondary"
            >
              <IconGithub />
            </a>
            <a
              href="https://twitter.com/cristodca"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-dark inline-block hover:fill-primary dark:fill-light dark:hover:fill-secondary"
            >
              <IconTwitter />
            </a>
          </div>

          <div>
            <button
              className="hover-link hover:text-primary dark:hover:text-secondary"
              onClick={() => {
                setIsDarkModeEnabled((prevState) => !prevState);
                toggleDarkMode();
              }}
            >
              Modo {isDarkModeEnabled ? "claro" : "oscuro"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const Nav = () => {
  const [nav, setNav] = useState<boolean>(true);

  return (
    <nav className="fixed select-none text-white right-[40px] top-[30px]">
      <img
        onClick={() => scrollToSection("home")}
        src="favicon.png"
        alt="favicon image"
        className="w-14 h-14 fixed left-5 top-1 cursor-pointer"
      />

      <div
        onClick={() => setNav(!nav)}
        className="flex flex-col gap-1 xsm:flex sm:hidden z-20"
      >
        <div
          className={
            nav
              ? `bg-white w-[35px] h-[4px] rounded transition-all`
              : `bg-custom-off-white w-[35px] h-[4px] rounded rotate-[45deg] translate-y-[10px] duration-500`
          }
        ></div>
        <div
          className={
            nav
              ? `bg-white w-[35px] h-[4px] rounded transition-all`
              : `bg-custom-off-white w-[35px] h-[4px] rounded opacity-0`
          }
        ></div>
        <div
          className={
            nav
              ? `bg-white w-[35px] h-[4px] rounded transition-all`
              : `bg-custom-off-white w-[35px] h-[4px] rounded rotate-[-45deg] translate-y-[-10px] duration-500`
          }
        ></div>
      </div>
      <RightNav nav={nav} />
      <ul
        className={
          nav
            ? `flex gap-8 text-gray z-30 text-[18px] font-semibold transition-all duration-500 xsm:flex-col xsm:fixed xsm:right-[20px] xsm:top-[60px] xsm:bg-custom-gray xsm:p-5 xsm:rounded-md sm:flex sm:flex-row sm:static sm:bg-transparent`
            : `flex gap-8 text-custom-off-black-1 z-30 text-[18px] font-semibold transition-all duration-500 xsm:flex-col xsm:fixed xsm:right-[-200px] xsm:top-[60px] sm:flex sm:flex-row`
        }
      >
        <li>
          <a
            href="https://github.com/SajanGhuman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="github.svg"
              alt="GitHub"
              className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/SajanGhuman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="linked.svg"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </li>
        <ScrollLink to="about" smooth={true} duration={500}>
          <li className="hover:text-red-500 transition-all duration-500 cursor-pointer">
            About me
          </li>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={200}>
          <li className="hover:text-red-500 transition-all duration-500 cursor-pointer">
            Projects
          </li>
        </ScrollLink>
      </ul>
    </nav>
  );
};

export default Nav;

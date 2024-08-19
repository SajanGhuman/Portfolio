"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Magentic from "./magnetic";
import styles from "./style.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  const handleNavigation = (href: string) => {
    if (pathname === "/projects") {
      router.push(`/`);
    } else {
      router.push(href);
    }
  };

  // Handle hash scrolling when navigating to the home page
  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleClick = () => {
    setAnimate(true);

    // Reset the animation after it completes
    setTimeout(() => {
      setAnimate(false);
    }, 2000); // Match the duration of the animation (2s in this case)
  };

  return (
    <div
      id="nav"
      className="z-[100] navbar bg-custom-gray w-full h-[50px] flex justify-center fixed top-0 right-0 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg border-b border-white/10"
    >
      <img
        src="favicon.png"
        alt="favicon image"
        className="w-14 h-14 absolute left-5 cursor-pointer"
        onClick={handleClick}
      />
      <div
        className={`${styles.cloudText} ${animate ? styles.cloudTextShow : ""}`}
      >
        SUP!!!
      </div>
      <div className="text-[20px] hidden md:flex items-center space-x-[50px]">
        <Magentic>
          <div className="relative group select-none">
            <div
              onClick={() => handleNavigation("#home")}
              className="cursor-pointer text-gray-500 hover:text-custom-rose"
            >
              Homepage
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-custom-rose transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
          </div>
        </Magentic>
        <Magentic>
          <div className="relative group select-none">
            <div
              onClick={() => handleNavigation("#projects")}
              className="cursor-pointer text-gray-500 hover:text-custom-rose"
            >
              Work
            </div>
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-custom-rose transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
          </div>
        </Magentic>
      </div>

      {/* Icon Container */}
      <div className="absolute right-14 top-3 flex space-x-6">
        <Magentic>
          <Link
            href="https://github.com/SajanGhuman"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github hidden md:block hover:text-custom-rose"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>{" "}
          </Link>
        </Magentic>
        <Magentic>
          <Link
            href="https://www.linkedin.com/in/sajanghuman/"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin hidden md:block hover:text-custom-rose"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>{" "}
          </Link>
        </Magentic>
      </div>

      <div className="md:hidden dropdown dropdown-end absolute right-4">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white/20 backdrop-filter backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-white/10"
        >
          <li>
            <a
              className="text-gray-500 hover:text-white"
              href="#home"
              onClick={() => handleNavigation("#home")}
            >
              Homepage
            </a>
          </li>
          <li>
            <a
              className="text-gray-500 hover:text-white"
              href="#projects"
              onClick={() => handleNavigation("#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-gray-500 hover:text-white"
              href="https://github.com/SajanGhuman"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="text-gray-500 hover:text-white"
              href="https://www.linkedin.com/in/sajanghuman/"
              target="_blank"
            >
              Linked In
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

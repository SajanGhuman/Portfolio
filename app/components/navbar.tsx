"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <div className="z-[100] navbar bg-custom-gray w-full h-[50px] flex justify-center fixed top-0 right-0 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg border-b border-white/10">
      <Link href="/" onClick={() => handleNavigation("#home")}>
        <img
          src="favicon.png"
          alt="favicon image"
          className="w-14 h-14 absolute left-5 cursor-pointer"
        />
      </Link>

      <div className="text-[20px] hidden md:flex items-center space-x-[50px]">
        <div className="relative group select-none">
          <div
            onClick={() => handleNavigation("#home")}
            className="text-gray-500 hover:text-white"
          >
            Homepage
          </div>
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </div>
        <div className="relative group select-none">
          <div
            onClick={() => handleNavigation("#projects")}
            className="text-gray-500 hover:text-white"
          >
            Projects
          </div>
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </div>
      </div>

      {/* Icon Container */}
      <div className="absolute right-14 top-3 flex space-x-6">
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
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github hidden md:block"
          >
            {/* SVG Content */}
          </svg>
        </Link>
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin hidden md:block"
          >
            {/* SVG Content */}
          </svg>
        </Link>
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

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="z-[100] navbar bg-custom-gray w-full h-[100px] flex justify-center fixed top-0 right-0 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg border-b border-white/10">
      <Link href="#home">
        <img
          src="favicon.png"
          alt="favicon image"
          className="w-14 h-14 absolute left-5 top-3 cursor-pointer"
        />
      </Link>

      <div className="text-[20px] hidden md:flex items-center space-x-[50px]">
        <div className="relative group select-none">
          <Link href="#home" className="text-gray-500 hover:text-white">
            Homepage
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </div>
        <div className="relative group select-none">
          <Link href="#projects" className="text-gray-500 hover:text-white">
            Projects
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </div>
        <div className="relative group select-none">
          <Link href="#about" className="text-gray-500 hover:text-white">
            About
          </Link>
          <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></span>
        </div>
      </div>

      {/* Icon Container */}
      <div className="absolute right-14 top-7 flex space-x-4">
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
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
            <a className="text-gray-500 hover:text-white" href="#home">
              Homepage
            </a>
          </li>
          <li>
            <a className="text-gray-500 hover:text-white" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-gray-500 hover:text-white" href="#about">
              About
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

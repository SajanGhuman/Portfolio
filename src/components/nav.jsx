import React, { useEffect, useState } from "react";
import RightNav from "./rightNav";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(true);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const offStyles = "bg-white w-[50px] h-[5px] rounded transition-all";
  const onStyles = "bg-custom-gray w-[50px] h-[5px] rounded";

  return (
    <div className="absolute text-white right-[100px] top-[10px]">
      <div
        onClick={() => setNav(!nav)}
        className="flex flex-col gap-2 relative left-[80px] top-3 x-sm:flex sm:hidden z-20"
      >
        <div
          className={
            nav === true
              ? `bg-white w-[50px] h-[5px] rounded transition-all`
              : `bg-custom-off-white w-[50px] h-[5px] rounded rotate-[45deg] translate-y-[12px] translate-x-[42px] duration-500`
          }
        ></div>
        <div
          className={
            nav === true
              ? `bg-white w-[50px] h-[5px] rounded transition-all`
              : `bg-custom-off-white w-[50px] h-[5px] rounded translate-x-[1000px] duration-700`
          }
        ></div>
        <div
          className={
            nav === true
              ? `bg-white w-[50px] h-[5px] rounded transition-all `
              : `bg-custom-off-white w-[50px] h-[5px] rounded rotate-[-45deg] translate-y-[-12px] translate-x-[42px] duration-700`
          }
        ></div>
      </div>
      <RightNav nav={nav} />
      <ul
        className={
          nav
            ? `flex gap-8 text-custom-off-black-1 z-30 text-[20px] font-bold transition-all duration-[500] x-sm:flex-col x-sm:relative x-sm:left-[1000px] x-sm:top-[40px] x-sm:justify-center sm:flex sm:flex-row sm:left-[40px] sm:top-[40px]`
            : `flex gap-8 text-custom-off-black-1 z-30 text-[20px] font-bold transition-all duration-[500] x-sm:flex-col x-sm:relative x-sm:left-[60px] x-sm:top-[40px] x-sm:justify-center sm:flex sm:flex-row `
        }
      >
       <Link to={"/projects"}>  <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
          Projects
        </li>
        </Link>
        <Link to={"/contact"}> <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
          Contact
        </li>
        </Link>
        <li className=" hover:text-red-500 hover:translate-y-[-2px] transition-all duration-500 cursor-pointer">
         <Link to={"/resume"}> <button className="inline-block font-semibold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow  ">
            Resume
          </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

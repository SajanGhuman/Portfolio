import React from "react";

const RightNav = ({ nav }) => {
  return (
    <div
      className={
        !nav
          ? `p-0 m-0 text-white w-[90vw] h-[100vh] absolute top-[-10px] left-[-10px] z-10 bg-blue-950 rounded-[20px] transition-all duration-200 sm:hidden`
          : `p-0 m-0 text-white w-[90vw] h-[100vh] absolute top-[-10px] left-[1000px] z-10 bg-blue-950`
      }
    ></div>
  );
};

export default RightNav;

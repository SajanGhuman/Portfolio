import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./projects.jsx";
import About from "./about.jsx";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <Link to={"/"}>
        <h1 className="text-white text-[20px]  absolute left-5 top-5">
          @SajanGhuman
        </h1>
      </Link>
      <div
        className="flex justify-center items-center bg-custom-gray max-w-[100vw] w-[100vw] h-[100vh] overflow-x-hidden"
        // onMouseEnter={mouseEnter}
        // onMouseLeave={mouseLeave}
      >
        <Nav />
        {/* <HeroImage /> */}
        <div className="flex flex-col gap-5 justify-center items-center text-center select-none">
          <h2 className="relative text-custom-off-white text-center font-general_sans whitespace-nowrap x-sm:text-[30px] sm:text-[40px] lg:text-[50px] 2xl:text-[70px]">
            Hi,I am Sajan👋
          </h2>
          <h1 className="text-custom-off-white font-general_sans font-bold relative tracking-[-1px] text-center text-nowrap whitespace-nowrap x-sm:text-[40px] x-sm:leading-[40px] sm:text-[60px] sm:leading-[50px] lg:text-[95px] lg:leading-[80px] xl:text-[120px] xl:leading-[100px] 2xl:text-[130px] 2xl:leading-[105px]">
            FULL - STACK
            <br />
            WEB DEVELOPER.
          </h1>
          <Link to={"/resume"}>
            <button className="w-[160px] text-[20px] h-[50px] inline-block font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <About />
      <div className="bg-custom-gray h-[20vh] w-[100vw]"></div>
      <Projects />
      <div className="bg-custom-gray x-sm:h-[120vh] 500-sm:h-[130vh] md:h-[180vh] sm:h-[140vh] lg:h-[80vh] xl:h-[80vh]"></div>
    </div>
  );
};

export default Hero;

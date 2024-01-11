import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "./heroImage.jsx";
import Nav from "./nav.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./projects.jsx";

const Hero = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center bg-custom-gray max-w-[100vw] w-[100vw] h-[100vh] overflow-x-hidden"
        // onMouseEnter={mouseEnter}
        // onMouseLeave={mouseLeave}
      >
        <Nav />
        <HeroImage />
        <div className="flex flex-col lg:w-[1900px] lg:h-[310px] gap-5 justify-center items-center text-center relative lg:top-[100px] lg:left-[-70px] x-sm:left-[-20vw] x-sm:top-[15vh] 400-sm:left-[-18vw] 470-sm:left-[-12vw] 550-sm:left-[-13vw] sm:left-[-10vw] 900-lg:left-[-7vw]">
          <h2 className="relative text-custom-off-black text-center lg:text-[50px] lg:left-[40px] font-general_sans whitespace-nowrap 900-lg:left-[0px] x-sm:text-[30px]">
            Hi,I am Sajan 👋
          </h2>
          <h1 className="lg:leading-[115px] text-custom-off-white font-general_sans font-bold lg:text-[120px] relative tracking-tighter text-center text-nowrap whitespace-nowrap x-sm:text-[40px] x-sm:leading-[40px]">
            FULL - STACK
            <br />
            WEB DEVELOPER.
          </h1>
        </div>
        <Link to={"/projects"}>
          <button className="absolute top-[88vh] w-[160px] x-sm:left-[30vw] 420-sm:left-[35vw] 450-sm:left-[38vw] lg:left-[47%] text-[20px] h-[50px] inline-block font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

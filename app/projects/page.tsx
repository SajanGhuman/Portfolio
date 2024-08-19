import React from "react";
import Projects from "../components/projects";
import Navbar from "../components/navbar";

const ProjectsPage = () => {
  return (
    <div className="bg-custom-gray flex flex-col justify-center items-center">
      <Navbar />
      <h1 className="text-[40px] 600-sm:text-[70px] 700-sm:text-[70px] 900-sm:text-[70px] 1200-sm:text-[100px] font-semibold mt-[100px] ">
        Project Gallery
      </h1>
      <Projects />
    </div>
  );
};

export default ProjectsPage;

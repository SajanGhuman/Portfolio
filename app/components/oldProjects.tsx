"use client";
import React from "react";

const Projects = () => {
  return (
    //Frist Project
    <div
      id="projects"
      className="select-none flex justify-center items-center text-white bg-custom-gray w-[100vw] h-[100vh] font-general_sans"
    >
      <div className="w-[90vw] h-[90vh] flex flex-col items-center relative x-sm:top-[100px] lg:top-[200px] xl:top-[200px]">
        <h1 className="font-bold text-[50px]">Projects</h1>
        <p className="text-custom-off-white"></p>
        <div className="flex flex-col relative top-[100px] justify-center items-center gap-[100px] w-[1200px]">
          <div className="flex flex-col lg:flex-row lg:gap-[30px] justify-center items-center relative">
            <img
              src="/1.png"
              alt=""
              className="w-[300px] 500-sm:w-[450px] md:w-[650px] 900-lg:w-[800px] lg:w-[400px] "
            />
            <div className="relative top-[0px] flex flex-col justify-center items-center">
              <h1 className="relative text-[40px] font-bold 500-sm:text-[50px] lg:text-[40px]">
                Cube Space
              </h1>
              <p className="text-custom-off-white text-center w-[350px] text-[19px] 500-sm:w-[480px] sm:text-[19px] md:w-[700px] 900-lg:w-[840px] 900-lg:text-[20px] lg:text-[16px] lg:w-[600px] xl:w-[850px] xl:text-[22px]">
                Cube space is a CRUD project designed to learn
                <span className="underline font-bold whitespace-nowrap ">
                  <a href="https://en.wikipedia.org/wiki/Rubik%27s_Cube">
                    ‎ Rubicks Cube
                  </a>
                </span>
                ‎ algorithms in a fun and strcutrued way.All the algorithms for
                a rubicks are stored in a database which are then seprated by
                type of algorithm.
                <strong className="text-custom-purple"> React Js</strong> was
                used for front-end making the website responsive and lag free.
                For back-end <strong className="text-custom-purple">PHP</strong>{" "}
                was used to handle data requests and excute approprirate query
                in the <strong className="text-custom-purple">SQL</strong>{" "}
                database.
              </p>
              <a href="https://cubespace.sajanghuman.com/">
                <button className="relative top-[30px] text-[20px] h-[50px] font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
                  Website
                </button>
              </a>
            </div>
          </div>

          <div
            className={
              // window.screen.width < 1024
              `relative top-[150px] flex flex-col lg:flex-row lg:gap-[30px] justify-center items-center`
              // : `relative top-[150px] flex flex-col lg:flex-row lg:gap-[30px]  justify-center items-center`
            }
          >
            <img
              src="/parks.png"
              alt=""
              className="block lg:hidden w-[300px] 500-sm:w-[450px] md:w-[650px] 900-lg:w-[800px] lg:w-[400px]"
            />
            <div className="flex flex-col justify-center items-center  relative top-[0px]">
              <h1 className="text-[40px] font-bold">Winnipeg Parks</h1>
              <p className="text-custom-off-white w-[300px] text-center 500-sm:w-[480px] 500-sm:text-[21px] md:w-[700px]  900-lg:w-[840px] 900-lg:text-[22px] lg:text-[16px] lg:w-[600px]  xl:w-[850px] xl:text-[22px]">
                Winnipeg parks used fetch API calls to fetch data from
                <strong className="text-custom-purple">
                  {" "}
                  Winnpeg Open Data Set.{" "}
                </strong>
                The user can input the name of any park or its location in
                winnipeg and instantly get all the results based on the search.
              </p>
              <a href="https://winnipegparks.sajanghuman.com/">
                <button className="relative top-[30px] text-[20px] h-[50px] font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
                  Website
                </button>
              </a>
            </div>
            <img
              src="/parks.png"
              alt=""
              className="hidden lg:block w-[300px] 500-sm:w-[450px] md:w-[650px] 900-lg:w-[800px] lg:w-[400px]"
            />
          </div>

          <div
            className={
              // window.screen.width < 1024
              `relative top-[150px] flex flex-col lg:flex-row lg:gap-[30px] h-[100vh] justify-center items-center`
              // : `relative top-[150px] flex flex-col lg:flex-row lg:gap-[30px] h-[60vh]  justify-center items-center`
            }
          >
            <img
              src="/coffee.png"
              alt=""
              className="block 1000lg:hidden w-[300px] 500-sm:w-[450px] md:w-[650px] 900-lg:w-[800px] lg:w-[400px]"
            />
            <div className="flex flex-col justify-center items-center  relative top-[0px]">
              <h1 className="text-[40px] font-bold">Coffee Blogs</h1>
              <p className="text-custom-off-white w-[300px] text-center 500-sm:w-[480px] 500-sm:text-[21px] md:w-[700px]  900-lg:w-[840px] 900-lg:text-[22px] lg:text-[16px] lg:w-[600px]  xl:w-[850px] xl:text-[22px]">
                Coffee blogs is a CRUD Blog Project for sharing blogs on the
                web. Built in plain HTML,CSS and vanila Javascript, the project
                was heavily focused on the{" "}
                <strong className="text-custom-purple">PHP</strong> prgramming
                language for handling database requests through a server.
                Anybody can{" "}
                <strong className="text-custom-purple">
                  Post, Edit and Delete
                </strong>{" "}
                their posted blogs. The admin can also supervise the posted
                blogs and delete them if neccessary.
              </p>
              <a href="https://coffeeblogs.sajanghuman.com/">
                <button className="relative top-[30px] text-[20px] h-[50px] font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
                  Website
                </button>
              </a>
            </div>
            <img
              src="/coffee.png"
              alt=""
              className="hidden 1000lg:block w-[300px] 500-sm:w-[450px] md:w-[650px] 900-lg:w-[800px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

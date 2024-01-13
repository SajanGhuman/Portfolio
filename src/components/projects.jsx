import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex justify-center items-center text-white bg-custom-gray w-[100vw] h-[100vh] font-general_sans"
    >
      <div className="w-[90vw] h-[90vh] flex flex-col items-center">
        <h1 className="font-bold text-[50px] ">Projects</h1>
        <p className="text-custom-off-white"></p>
        <div className="flex flex-col relative top-[100px] justify-center items-center gap-[100px] w-[1200px]">
          <div className="flex">
            <img src="images/cubespace/1.png" alt="" className="w-[550px]" />
            <div className="relative top-[40px]">
              <h1 className="relative text-[40px] top-[-30px] left-[250px] font-bold">
                Cube Space
              </h1>
              <p className="text-custom-off-white ml-[30px] text-center">
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
                <button className="relative top-[30px] left-[300px] text-[20px] h-[50px] font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
                  Website
                </button>
              </a>
            </div>
          </div>
          <div className="flex h-[100vh]">
            <div className="flex flex-col relative top-[50px]">
              <h1 className="relative text-[40px] top-[-30px] left-[250px] font-bold">
                Coffee Blogs
              </h1>
              <p className="text-custom-off-white mx-[10px] text-center">
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
                <button className="relative top-[20px] left-[310px] text-[20px] h-[50px] font-bold tracking-[-0.05rem] bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
                  Website
                </button>
              </a>
            </div>
            <img
              src="images/coffee.png"
              alt=""
              className="w-[500px] h-[300px] relative left-[0px]"
            />
          </div>
        </div>
      </div>
      {/* <div className="absolute h-[100vh] w-[100vw] bg-custom-gray"></div> */}
    </div>
  );
};

export default Projects;

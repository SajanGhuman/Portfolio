import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="mb-[-200px] flex justify-center items-center bg-custom-gray w-[100vw] h-[200vh]">
      <Link to={"/"}>
        <h1 className="text-white text-[20px] absolute left-5 top-5">
          @SajanGhuman
        </h1>
      </Link>
      <div className="m-[100px] flex flex-col justify-center overflow-x-hidden items-center w-[100vw] h-[200vh]">
        <div className="flex gap-[200px]">
          <Link to={"/"}>
            <button className="relative top-[-120px] left-[-10%] w-[100px] h-[40px] text-center  bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
              Go Back
            </button>
          </Link>
          <a href="Resume.pdf" download>
            <button className="relative top-[-120px] left-[0%] w-[100px] h-[40px] text-center bg-custom-rose text-custom-white px-[1rem] rounded-[6px] no-underline shadow-button-shadow">
              Downlaod
            </button>
          </a>
        </div>
        <iframe
          src="/Resume.pdf"
          frameborder="0"
          className="relative top-[-100px] w-[50vw] h-[1000px] border-[20px] border-custom-grey rounded-[20px] no:hidden sm:block xl:h-[900px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-custom-gray text-white font-general_sans h-[100vh] w-[100vw] flex first:justify-center first:items-center p-0 m-0 text-center justify-center items-center"
    >
      <div className="w-[80vw] h-[80vh] flex flex-col items-start">
        <h3 className="text-[20px]">About Me </h3> <br />
        <h1 className="text-[60px] font-bold">Introduction.</h1>
        <p className="text-left w-[800px] pl-[10px] text-[17px] text-custom-off-white leading-[20px] tracking-[1.1px]">
          A passionate{" "}
          <strong className="text-custom-purple">
            Full Stack Web development
          </strong>{" "}
          student studying at Red River College in the city of winnipeg.Major
          interest include coding pixel perfect web applications.I wake up in
          the morning, grab a cup of coffee, open up my laptop and start{" "}
          <strong className="text-custom-purple">building websites</strong> that
          live on the web.
          <br />
          <br />I started my journey into web development when i first learned
          html at 14 years old, instantly amazed by the concept of creating
          something which people could acces from anywhere. Since then i have
          refined my coding abilities and strive to become a{" "}
          <strong className="text-custom-purple">better developer</strong> every
          day.
        </p>
        <hr className="m-[10px] w-[800px] h-[2px] bg-custom-off-black" />
        <h1 className="text-[30px] font-bold">Stack.</h1>
        <div className="flex relative top-[10px] select-none">
          <div className="flex flex-col justify-center items-center gap-[20px] flex-wrap overflow-hidden select-none">
            <img
              src="/images/tailwind.png"
              alt="Tailwind"
              className="w-[50px]"
            />
            <img
              src="/images/js.png"
              alt="NextJS"
              className="w-[40px] rounded-full relative top-[3px]"
            />
            <img
              src="/images/html.png"
              alt="Tailwind"
              className="w-[40px] relative top-[6px]"
            />
            <img
              src="/images/css.png"
              alt="Tailwind"
              className="w-[60px] relative top-[13px] rounded-full"
            />
          </div>
          <div>
            <ul className="relative top-[5px] flex flex-col gap-[35px] flex-wrap justify-center items-center">
              <li className="flex justify-center items-center">
                <p className="pl-[15px] font-bold text-[20px]">Tailwind CSS</p>
              </li>
              <li className="flex justify-center items-center">
                <p className="pl-[0px] font-bold text-[20px]">Javascript</p>
              </li>
              <li className="flex justify-center items-center">
                <p className="pl-[15px] font-bold text-[20px] relative">HTML</p>
              </li>
              <li className="flex justify-center items-center">
                <p className="pl-[15px] font-bold text-[20px]">CSS</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex relative left-[-850px] top-[195px] select-none">
        <div className="flex flex-col justify-center items-center gap-[20px] flex-wrap overflow-auto">
          <img src="/images/react.png" alt="ReactJS" className="w-[50px]" />
          <img
            src="/images/next.png"
            alt="Javascript"
            className="w-[90px] relative top-[-10px]"
          />
          <img
            src="/images/ps.png"
            alt="Tailwind"
            className="w-[35px] relative top-[-10px]"
          />
          <img
            src="/images/node.jpg"
            alt="Tailwind"
            className="w-[40px] rounded-full relative top-[-8px]"
          />
        </div>
        <div>
          <ul className="relative top-[13px] flex flex-col gap-[35px] flex-wrap justify-center items-center">
            <li className="flex justify-center items-center">
              <p className="pl-[15px] font-bold text-[20px]">React JS</p>
            </li>
            <li className="flex justify-center items-center">
              <p className="pl-[0px] font-bold text-[20px]">Next JS</p>
            </li>
            <li className="flex justify-center items-center">
              <p className="pl-[15px] font-bold text-[20px]">Postgress SQL</p>
            </li>
            <li className="flex justify-center items-center">
              <p className="pl-[15px] font-bold text-[20px]">Node JS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

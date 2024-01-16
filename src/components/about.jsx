import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-custom-gray text-white font-general_sans h-[100vh] w-[100vw] flex text-center justify-center items-center"
    >
      <div className="w-[80%] h-[80%] flex flex-col items-center relative left-[40%] translate-x-[-50%]">
        <h3 className="text-[30px]">About Me </h3> <br />
        <h1 className="text-[70px] font-bold">Introduction.</h1>
        <p className="text-center text-[25px] text-custom-off-white leading-[30px] tracking-[1.1px]">
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
        <hr className="m-[25px] w-[1000px] bg-custom-off-black" />
        <h1 className="text-[50px] font-bold">Stack.</h1>
        <div className="flex select-none">
          <div className="flex relative left-[-30px]">
            <div className="flex flex-col justify-center relative top-[10px] items-center gap-[30px] flex-wrap overflow-hidden select-none">
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
              <ul className=" flex flex-col gap-[35px] flex-wrap justify-center items-center text-[25px] relative top-[15px]">
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold">Tailwind CSS</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[0px] font-bold">Javascript</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold relative">HTML</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold">CSS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex select-none  relative left-[30px]">
            <div className="flex flex-col justify-center items-center gap-[20px] flex-wrap">
              <img src="/images/react.png" alt="React" className="w-[50px]" />
              <img
                src="/images/next.png"
                alt="Next"
                className="w-[90px]"
              />
              <img
                src="/images/ps.png"
                alt="Postgress"
                className="w-[35px]"
              />
              <img
                src="/images/node.jpg"
                alt="Node"
                className="w-[40px] rounded-full relative top-[15px]"
              />
            </div>
            <div>
              <ul className="relative top-[13px] text-[25px] flex flex-col gap-[35px] flex-wrap justify-center items-center">
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold">React JS</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[0px] font-bold">Next JS</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold">Postgress SQL</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold">Node JS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

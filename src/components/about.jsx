import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="select-none bg-custom-gray text-white font-general_sans h-[100vh] w-[100vw] flex text-center justify-center items-center"
    >
      <div className="w-[80%] h-[80%] flex flex-col items-center relative left-[40%] translate-x-[-50%]">
        <h3 className="text-[30px] 900-lg:text-[40px] xl:text-[40px]">
          About Me{" "}
        </h3>{" "}
        <br />
        <h1 className="text-[70px] font-bold x-sm:text-[50px] 900-lg:text-[70px] xl:text-[90px]">
          Introduction.
        </h1>
        <p className="text-center text-[25px] text-custom-off-white leading-[30px] tracking-[1.1px] x-sm:text-[19px] x-sm:leading-[20px] x-sm:tracking-[1.5px] w-[370px] 500-sm:w-[480px] 500-sm:text-[20px] sm:text-[21px] sm:w-[620px] sm:leading-[23px] md:w-[740px] 900-lg:text-[25px] 900-lg:w-[850px] lg:leading-[30px] lg:text-[21px] lg:w-[850px] xl:text-[23px] xl:w-[1100px] xl:leading-[35px] 2xl:text-[25px] 2xl:w-[1300px] 2xl:leading-[40px]">
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
        <h1 className="text-[50px] font-bold x-sm:text-[40px] lg:text-[70px]  ">
          Stack.
        </h1>
        <div className="flex select-none md:gap-[50px] 900-lg:gap-[70px]">
          <div className="flex relative left-[-30px] top-[15px]">
            <div className="flex flex-col justify-center relative top-[10px] items-center x-sm:gap-[40px] x-sm:top-[-10px] gap-[30px] overflow-hidden select-none md:gap-[50px]">
              <img
                src="/images/tailwind.png"
                alt="Tailwind"
                className="w-[50px] relative x-sm:top-[10px]"
              />
              <img
                src="/images/js.png"
                alt="js"
                className="w-[40px] rounded-full relative top-[3px] x-sm:top-[20px] 550-sm:top-[10px]"
              />
              <img
                src="/images/html.png"
                alt="HTML"
                className="w-[40px] relative top-[6px]"
              />
              <img
                src="/images/css.png"
                alt="CSS"
                className="w-[60px] x-sm:w-[100px] relative top-[13px] x-sm:top-[0px] rounded-full 500-sm:w-[60px]"
              />
            </div>
            <div>
              <ul className="flex flex-col gap-[35px] justify-center items-center text-[25px] relative top-[0px] x-sm:text-[19px] 550-sm:gap-[45px] md:text-[25px] xl:text-[27px] xl:gap-[40px]">
                <li className="flex justify-center items-center">
                  <p className="pl-[15px] font-bold">Tailwind CSS</p>
                </li>
                <li className="flex justify-center items-center">
                  <p className="pl-[0px] font-bold mr-[-10px]">Javascript</p>
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
            <div className="flex flex-col justify-center items-center gap-[20px] x-sm:gap-[30px] 500-sm:gap-[20px] md:gap-[25px]">
              <img src="/images/react.png" alt="React" className="w-[50px]" />
              <img src="/images/next.png" alt="Next" className="w-[90px] " />
              <img src="/images/ps.png" alt="Postgress" className="w-[35px] " />
              <img
                src="/images/node.jpg"
                alt="Node"
                className="w-[40px] rounded-full relative top-[15px]"
              />
            </div>
            <div>
              <ul className="relative top-[13px] text-[25px] x-sm:text-[19px] flex flex-col gap-[35px] justify-center items-center 550-sm:gap-[45px] md:text-[25px] xl:gap-[45px]">
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

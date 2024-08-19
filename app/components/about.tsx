const About = () => {
  return (
    <div className="bg-white select-none bg-custom-gray text-white font-general_sans w-full h-[900px] flex flex-col items-center justify-center">
      <div className="w-[600px] flex flex-col items-center">
        <h3 className="text-[20px] lg:text-[22px]">About Me</h3>
        <h1 className="text-[28px] lg:text-[32px] font-bold mt-4">
          Introduction.
        </h1>
        <p className="text-center text-[16px] lg:text-[18px] text-custom-off-white mt-6 leading-relaxed tracking-wide">
          A passionate{" "}
          <strong className="text-custom-purple">
            Full Stack Web Developer
          </strong>{" "}
          studying at Red River College in the city of Winnipeg. Major interests
          include coding pixel-perfect web applications. I wake up in the
          morning, grab a cup of coffee, open up my laptop, and start{" "}
          <strong className="text-custom-purple">building websites</strong> that
          live on the web.
          <br />
          <br />I started my journey into web development when I first learned
          HTML at the age of 14, instantly amazed by the concept of creating
          something which people could access from anywhere. Since then I have
          refined my coding abilities and strived to become a{" "}
          <strong className="text-custom-purple">better developer</strong> every
          day.
        </p>
        <hr className="my-8 w-full border-custom-off-black" />
        <h1 className="text-[28px] lg:text-[32px] font-bold">Stack.</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="flex flex-col items-center">
            <img
              src="/tailwind.svg"
              alt="Tailwind CSS"
              className="w-[48px] h-[48px]"
            />
            <p className="mt-2 text-[14px] lg:text-[16px] font-bold">
              Tailwind CSS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/typescript.svg"
              alt="TypeScript"
              className="w-[48px] h-[48px] rounded-full"
            />
            <p className="mt-2 text-[14px] lg:text-[16px] font-bold">
              TypeScript
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/next.svg" alt="Next.js" className="w-[48px] h-[48px]" />
            <p className="mt-2 text-[14px] lg:text-[16px] font-bold">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/supabase.svg"
              alt="Supabase"
              className="w-[48px] h-[48px]"
            />
            <p className="mt-2 text-[14px] lg:text-[16px] font-bold">
              Supabase
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/nodejs.svg"
              alt="Node.js"
              className="w-[48px] h-[48px] rounded-full"
            />
            <p className="mt-2 text-[14px] lg:text-[16px] font-bold">Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

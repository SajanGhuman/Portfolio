const About = () => {
  return (
    <div
      id="about"
      className="select-none bg-custom-gray text-white font-general_sans min-h-screen w-full flex justify-center items-center"
    >
      <div className="w-11/12 max-w-4xl flex flex-col items-center">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl">About Me</h3>
        <h1 className="text-4xl font-bold mt-4 xsm:text-3xl lg:text-5xl xl:text-6xl">
          Introduction.
        </h1>
        <p className="text-center text-lg text-custom-off-white mt-6 leading-relaxed tracking-wide xsm:text-base xsm:leading-normal sm:text-lg md:w-3/4 xl:w-full xl:text-xl xl:leading-relaxed">
          A passionate{" "}
          <strong className="text-custom-purple">
            Full Stack Web Developer
          </strong>{" "}
          studying at Red River College in the city of Winnipeg. Major interests
          include coding pixel-perfect web applications. I wake up in the
          morning, grab a cup of coffee, open up my laptop and start{" "}
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
        <hr className="my-8 w-full max-w-xl border-custom-off-black" />
        <h1 className="text-4xl font-bold xsm:text-3xl lg:text-5xl xl:text-6xl">
          Stack.
        </h1>
        <div className="flex flex-wrap justify-center gap-12 mt-6">
          <div className="flex flex-col items-center">
            <img src="/tailwind.svg" alt="Tailwind CSS" className="w-16 h-16" />
            <p className="mt-2 text-lg font-bold">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/typescript.svg"
              alt="JavaScript"
              className="w-16 h-16 rounded-full"
            />
            <p className="mt-2 text-lg font-bold">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/next.svg" alt="Next.js" className="w-16 h-16" />
            <p className="mt-2 text-lg font-bold">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/supabase.svg" alt="PostgreSQL" className="w-16 h-16" />
            <p className="mt-2 text-lg font-bold">Supabase</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/nodejs.svg"
              alt="Node.js"
              className="w-16 h-16 rounded-full"
            />
            <p className="mt-2 text-lg font-bold">Node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

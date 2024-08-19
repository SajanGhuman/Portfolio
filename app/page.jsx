import Link from "next/link";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="bg-custom-gray">
      <Navbar />
      <section
        id="home"
        className="flex flex-col gap-5 justify-center items-center select-none mb-[100px] min-h-[100vh]"
      >
        <h2 className="text-custom-off-white font-bold font-general_sans text-[20px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px]">
          Hi, I am Sajan 👋
        </h2>
        <h1 className="text-custom-off-white font-general_sans font-bold tracking-tight text-center sm:text-[30px] lg:text-[45px] xl:text-[60px] 2xl:text-[70px]">
          FULL - STACK
          <br />
          WEB DEVELOPER.
        </h1>
        <Link href="#projects">
          <Button className="min-w-[15px] text-[15px] font-bold text-custom-white border-2 border-custom-border animate-glowingBorder shadow-button-shadow lg:w-[20px]">
            WORK
          </Button>
        </Link>
      </section>
      <section id="projects" className="min-h-screen scroll-mt-[100px]">
        <Projects />
      </section>
    </main>
  );
}

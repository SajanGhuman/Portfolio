import Link from "next/link";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="overflow-hidden bg-custom-gray h-[300vh] sm:h-[300vh] min-h-screen flex flex-col">
      <section
        id="home"
        className="flex flex-col items-center justify-center h-[100vh] w-full text-center"
      >
        <Navbar />
        <div className="flex flex-col gap-5 justify-center items-center select-none">
          <h2 className="text-custom-off-white font-general_sans text-2xl sm:text-4xl lg:text-5xl 2xl:text-7xl">
            Hi, I am Sajan 👋
          </h2>
          <h1 className="text-custom-off-white font-general_sans font-bold tracking-tight text-4xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-10xl">
            FULL - STACK
            <br />
            WEB DEVELOPER.
          </h1>
          <div className="scale-75 md:scale-100 block mt-4">
            <Link href="#projects">
              <Button className="relative w-40 h-12 text-lg font-bold text-custom-white rounded-md border-2 border-custom-border animate-glowingBorder shadow-button-shadow">
                WORK
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex flex-col items-center justify-center h-[110vh] w-full text-center"
      >
        <Projects />
      </section>
    </main>
  );
}

import Link from "next/link";
import About from "./components/about";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="overflow-hidden bg-custom-gray min-h-screen">
      <section id="home" className="flex justify-center items-center h-screen">
        <Navbar />
        <div className="flex flex-col gap-5 justify-center items-center text-center select-none">
          <h2 className="text-custom-off-white font-general_sans x-sm:text-2xl sm:text-4xl lg:text-5xl 2xl:text-7xl">
            Hi, I am Sajan 👋
          </h2>
          <h1 className="text-custom-off-white font-general_sans font-bold tracking-tight x-sm:text-4xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-10xl">
            FULL - STACK
            <br />
            WEB DEVELOPER.
          </h1>
          <div className="block xl:hidden">
            <a href="Resume.pdf" download>
              <button className="w-40 h-12 text-lg font-bold bg-custom-rose text-custom-white rounded-md shadow-button-shadow">
                Resume
              </button>
            </a>
          </div>
          <div className="hidden xl:block">
            <Link href="#projects">
              <button className="w-40 h-12 text-lg font-bold bg-custom-rose text-custom-white rounded-md shadow-button-shadow">
                Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <div className="bg-custom-gray h-20"></div>
    </main>
  );
}

"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Project from "../components/project";
import Modal from "./modal";
import Button from "./button";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Minecraft",
    src: "minecraft.jpg",
    color: "#5B8B32",
    desc: "Minecraft clone made in Three JS",
    website_link: "https://minecraft.sajanghuman.com/",
  },
  {
    title: "Cubespace",
    src: "cubespace.jpg",
    desc: "Learn rubicks cube algorithms interactively",
    color: "#E1EFC2",
    website_link:
      "https://cube-space-next-ktvu7anxi-sajan-ghumans-projects.vercel.app/",
  },
  {
    title: "Naruto Sensei",
    src: "naruto.png",
    desc: "Talk to a 3D AI-powered chatbot about naruto series",
    color: "#FFE182",
    website_link: "https://naruto.sajanghuman.com/",
  },
  {
    title: "Winnipeg Parks",
    src: "parks.jpg",
    desc: "Search nearby parks in Winnipeg",
    color: "#A020F0",
    website_link: "https://parks.sajanghuman.com/",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className={`${pathname === "/" ? "" : ""}`}>
      <div className="flex flex-col items-center justify-center ">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              src={project.src}
              setModal={setModal}
              key={index}
              pathname={pathname}
              website_link={project.website_link}
              desc={project.desc}
            />
          );
        })}
        {pathname === "/" && (
          <Button
            className="mt-[30px] min-w-[15px] text-[15px] font-bold text-custom-white border-2 border-custom-border animate-glowingBorder shadow-button-shadow"
            onClick={() => router.push("/projects")}
          >
            MORE WORK <sup className="ml-1">{projects.length}</sup>
          </Button>
        )}
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
}

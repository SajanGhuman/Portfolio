"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Project from "../components/project";
import Modal from "../components/modal";
import styles from "./style.module.css";
import Button from "./button";
import { useRouter } from "next/navigation";
import { relative } from "path";

const projects = [
  {
    title: "Minecraft",
    src: "minecraft.jpg",
    color: "#5B8B32",
    desc: "Minecraft clone made in Three JS",
    website_link:
      "https://www.linkedin.com/posts/sajanghuman_typescript-threejs-gamedevelopment-activity-7228171617271496704-l0-s?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Cubespace",
    src: "cubespace.jpg",
    desc: "Learn rubicks cube algortihms interactively",
    color: "#E1EFC2",
    website_link: "https://cubespace.sajanghuman.com/",
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
    desc: "Seach nearby parks in winipeg",
    color: "#A020F0",
    website_link: "https://parks.sajanghuman.com/",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);
  return (
    <main
      className={
        pathname === "/"
          ? `${styles.main} 1200-sm:mt-0 900-lg:-lg:mt-[500px] mt-[1000px] mb-[500px]`
          : `${styles.main}  900-lg:mt-[300px] 500-sm:mt[0px] 700-sm:mt-[500px] mt-[700px] mb-[500px]`
      }
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
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
            className="relative top-[50px] w-[200px] h-[50px] text-lg font-bold text-custom-white rounded-md border-2 border-custom-border animate-glowingBorder shadow-button-shadow"
            onClick={() => router.push("/projects")}
          >
            MORE WORK <sup className="ml-2">{projects.length}</sup>
          </Button>
        )}
      </div>

      <Modal modal={modal} projects={projects} />
    </main>
  );
}

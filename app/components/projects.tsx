"use client";
import { useState } from "react";
import Project from "./project";
import Modal from "./modal";

const projects_list = [
  {
    title: "Minecraft",
    src: "minecraft.jpg",
    color: "#5B8B32",
    link: "https://www.linkedin.com/posts/sajanghuman_typescript-threejs-gamedevelopment-activity-7228171617271496704-l0-s?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Naruto",
    src: "naruto.png",
    color: "#FFE182",
    link: "https://ask-naruto-sensei-eq8ctqtte-sajan-ghumans-projects.vercel.app/",
  },
  {
    title: "Cube Space",
    src: "cubespace.jpg",
    color: "#8C8C8C",
    link: "https://cube-space-next-jru0pbzpb-sajan-ghumans-projects.vercel.app/?__vercel_draft=1",
  },
  {
    title: "Coffee Blogs",
    src: "blogs.jpg",
    color: "#EFE8D3",
    link: "https://coffeeblogs.sajanghuman.com/",
  },
  {
    title: "Winnipeg Parks",
    src: "parks.jpg",
    color: "#7B32BF",
    link: "https://winnipegparks.sajanghuman.com/",
  },
  {
    title: "Tic Tac Toe",
    src: "tic.png",
    color: "#23273F",
    link: "https://tictactoe.sajanghuman.com/",
  },
];

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main
      id="projects"
      className="flex h-screen items-center justify-center px-4"
    >
      <div className="w-full max-w-[1000px] flex flex-col items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg border-b border-white/10">
        {projects_list.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            setModal={setModal}
            key={index}
            link={project.link}
          />
        ))}
      </div>
      {projects_list.map((project, index) => (
        <Modal
          modal={modal}
          projects={projects_list}
          project_link={project.link}
          key={`modal_${index}`}
        />
      ))}
    </main>
  );
}

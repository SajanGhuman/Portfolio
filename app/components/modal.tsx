import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Array<{
    src: string;
    color: string;
  }>;
  project_link: string;
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects, project_link }: ModalProps) {
  const { active, index } = modal;

  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX);
      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute h-[250px] w-[280px] sm:h-[300px] sm:w-[350px] md:h-[350px] md:w-[400px] bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, i) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${i}`}
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <Image
                  src={`/images/${src}`}
                  width={250}
                  height={0}
                  alt="image"
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className="absolute w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full bg-[#455CE9] text-white z-[2] flex items-center justify-center text-[12px] sm:text-[14px] md:text-[16px] font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <Link href={project_link}>View</Link>
      </motion.div>

      <motion.div
        ref={cursorLabel}
        className="absolute w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full z-[2] flex items-center justify-center text-[12px] sm:text-[14px] md:text-[16px] font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <Link href={project_link}>View</Link>
      </motion.div>
    </>
  );
}

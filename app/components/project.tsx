import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

type ProjectProps = {
  index: number;
  title: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
  pathname: string;
  website_link: string;
  desc: string;
};

const Project: React.FC<ProjectProps> = ({
  index,
  title,
  setModal,
  pathname,
  website_link,
  desc,
}) => {
  if (index >= 4 && pathname === "/") return null;

  return (
    <Link
      href={website_link}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2 className="relative left-[-100px] 500-sm:text-[20px]">{title}</h2>
      <p className="relative left-[100px] 500-sm:text-[20px]">{desc}</p>
    </Link>
  );
};

export default Project;

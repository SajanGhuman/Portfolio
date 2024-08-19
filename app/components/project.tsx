import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

export default function Project({
  index,
  title,
  setModal,
  pathname,
  website_link,
  desc,
}) {
  if (index >= 4 && pathname === "/") return;

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
      <p className="relative left-[100px] 500-sm:text-[20px] ">{desc}</p>
    </Link>
  );
}

import React from "react";
import Link from "next/link";

type ProjectProps = {
  index: number;
  title: string;
  src: string;
  setModal: (modalState: { active: boolean; index: number }) => void;
  pathname: string;
  website_link: string;
  desc: string;
};

const Project: React.FC<ProjectProps> = ({
  index,
  title,
  src,
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
      className="flex justify-between items-center border-t border-gray-300 cursor-pointer transition-all duration-200  flex-wrap hover:opacity-60 flex-row w-[70vw] gap-0 lg:p-[50px] xl:p-[80px] 2xl:p-[90px]"
    >
      <img src={`images/${src}`} className="lg:hidden" />
      <h2 className="text-[20px] font-normal transition-all duration-400 transform hover:-translate-x-4 sm:text-xl md:text-[20px] lg:text-[30px]  xl:text-[40px] 2xl:text-[50px]">
        {title}
      </h2>
      <p className="text-[10px] font-light transition-all duration-400 transform hover:translate-x-4 sm:text-xl md:text-[15px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px]">
        {desc}
      </p>
    </Link>
  );
};

export default Project;

"use client";
import React from "react";
import Link from "next/link";

export default function Project({ index, title, setModal, link }) {
  return (
    <Link href={link} passHref>
      <div
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
        className="group flex w-full justify-between items-center px-4  sm:px-6 md:px-12 lg:px-20 xl:px-[100px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[50px] border-t border-gray-300 cursor-pointer transition-opacity duration-200 last:border-b hover:opacity-50"
      >
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-light transition-transform duration-400 group-hover:-translate-x-2">
          {title}
        </h2>
        <p className="font-light ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-[20px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] transition-transform duration-400 group-hover:translate-x-2">
          Design & Development
        </p>
      </div>
    </Link>
  );
}

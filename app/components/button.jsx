"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "./magnetic";

export default function Button({
  children,
  backgroundColor = "#E11D48",
  className = "",
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`relative flex items-center justify-center cursor-pointer overflow-hidden rounded-full border border-pink-600 ${className}`}
        style={{ padding: "30px" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        <p className="relative z-20 transition-colors duration-400">
          {children}
        </p>
        <div
          ref={circle}
          className="absolute top-full z-10 h-[150%] w-full rounded-full"
          style={{ backgroundColor }}
        ></div>
      </div>
    </Magnetic>
  );
}

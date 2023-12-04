import React from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  value?: string;
  size?: "sm" | "ms" | "lg";
}

const setStyles = (size: string) => {
  if (size === "lg") {
    return "text-3xl h-16 w-16 border-2";
  } else if (size === "sm") {
    return " h-10 w-10 border-2";
  }
};

export default function Badge({ value, size }: BadgeProps) {
  return (
    <div
      className={`${setStyles(size)} 
      flex items-center 
      justify-center 
      subpixel-antialiased 
      font-sans 
      rounded-full 
      ${styles.badge}`}
    >
      {value}
    </div>
  );
}

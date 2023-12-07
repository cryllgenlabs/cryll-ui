import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  buttonStyle?: "primary" | "secondary" | "tertiary";
  buttonType?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  label?: string;
  click?: (e: any) => void;
}

export default function Button({
  buttonStyle,
  buttonType,
  size,
  label,
  click,
}: ButtonProps) {
  return (
    <button
      type={buttonType}
      onClick={click}
      className={`${styles.storybookButton} ${
        styles[`storybook-button--${size}`]
      } ${styles[`storybook-button--${buttonStyle}`]}`}
    >
      {label}
    </button>
  );
}

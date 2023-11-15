import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  buttonStyle?: "primary" | "secondary" | "tertiary";
  buttonType?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  label?: string;
  click?: (e: any) => void;
};

export default function Button({
  buttonStyle,
  buttonType,
  size,
  label,
  click = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    alert("button clicked");
  },
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

import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import styles from "./Input.module.scss";

interface InputProps {
  inputType?: string;
  inputValue?: string;
  placeholderText?: string;
  change?: ChangeEventHandler<HTMLInputElement>;
  keyup?: KeyboardEventHandler<HTMLInputElement>;
}

export default function Input({
  inputType,
  inputValue,
  placeholderText,
  change,
  keyup,
}: InputProps) {
  return (
    <div className="m-1">
      <input
        className={styles.input}
        type={inputType}
        placeholder={placeholderText}
        value={inputValue}
        onChange={change}
        onKeyUp={keyup}
        data-testid="searchValue-input"
      />
    </div>
  );
}

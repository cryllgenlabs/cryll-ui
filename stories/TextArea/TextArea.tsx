import React from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  inputValue?: string;
  placeholderText?: string;
  change?: (value: any) => void;
  keyup?: (value: any) => void;
}

export default function TextArea({
  inputValue = "",
  placeholderText = "Type Something",
  change = (value: any) => {
    console.log(value);
  },
  keyup = (value: any) => {
    console.log(value);
  },
}: TextAreaProps) {
  return (
    <div className="m-1">
      <textarea
        className={styles.textarea}
        placeholder={placeholderText}
        value={inputValue}
        onChange={change}
        onKeyUp={keyup}
        data-testid="searchValue-input"
      />
    </div>
  );
}

import React, { ChangeEventHandler, KeyboardEventHandler } from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  inputValue?: string;
  placeholderText?: string;
  change?: ChangeEventHandler<HTMLTextAreaElement>;
  keyup?: KeyboardEventHandler<HTMLTextAreaElement>;
}

export default function TextArea({
  inputValue = "",
  placeholderText = "Type Something",
  change,
  keyup,
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

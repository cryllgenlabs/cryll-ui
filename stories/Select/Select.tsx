import React, { useState } from "react";
import styles from "./Select.module.scss";

interface SelectProps {
  label: string;
  options: any[];
  value: string;
  triggerFunction: (value: string) => void;
}

export default function Select({
  label,
  options,
  value,
  triggerFunction,
}: SelectProps) {
  let [selectedValue, setSelectedValue] = useState(value);

  function updateValue(event: any) {
    setSelectedValue(event.target.value);
    triggerFunction(event.target.value);
  }

  return (
    <div className={styles.selectContainer} data-testid="tabs">
      <div className={styles.selectLabel}>{label}</div>
      <select
        className={styles.select}
        value={selectedValue}
        onChange={updateValue}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

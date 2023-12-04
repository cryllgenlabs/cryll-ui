import React from "react";
import styles from "./Counter.module.scss";
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
  title?: string;
}

export default function Counter({ initialCount, title }: CounterProps) {
  const [counter, setCounter] = useState(Number(initialCount) || 0);

  function increaseCount() {
    setCounter(counter + 1);
  }

  function decreaseCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <label className={styles.label} data-testid="label">
        {title}
      </label>
      <div className={styles.roundedBorder}>
        <button
          className={styles.primary}
          onClick={decreaseCount}
          data-testid="decrement-button"
        >
          -
        </button>
        <span className={styles.counter} data-testid="counter">
          {counter}
        </span>
        <button
          className={styles.primary}
          onClick={increaseCount}
          data-testid="increment-button"
        >
          +
        </button>
      </div>
    </div>
  );
}

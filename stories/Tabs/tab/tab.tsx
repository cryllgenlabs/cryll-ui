import styles from "./tab.module.scss";
import React, { MouseEventHandler } from "react";

interface TabProps {
  tab?: string;
  isActive?: boolean;
  selectTab?: () => void;
}

export default function Tab({
  tab = "Default",
  isActive = false,
  selectTab,
}: TabProps) {
  return (
    <div
      className={`flex items-center justify-center px-4 w-fit h-full 	max-w-max
      ${styles.tab} 
      ${isActive ? styles.active : ""}`}
      onClick={selectTab}
      data-testid="tab"
    >
      {tab}
    </div>
  );
}

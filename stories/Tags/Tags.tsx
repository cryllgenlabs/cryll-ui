import React from "react";
import styles from "./Tags.module.scss";

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={styles.tile__tags}>
      {tags.map((item, index) => {
        return (
          <span className="pr-2" key={index}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

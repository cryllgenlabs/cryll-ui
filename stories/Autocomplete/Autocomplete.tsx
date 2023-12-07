import styles from "./Autocomplete.module.scss";
import React from "react";
import { useState } from "react";
import Button from "../Button/Button";

interface AutocompleteProps {
  initialSearchValue?: string;
  search?: (value: string) => void;
}
export default function Autocomplete({
  initialSearchValue,
  search,
}: AutocompleteProps) {
  const [searchValue, setSearchValue] = useState(initialSearchValue || "");

  function handleChange(event): void {
    event.preventDefault();
    setSearchValue(event.target.value);
    if (event.key === "Enter") {
      search(searchValue);
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      search(searchValue);
    }
  }

  return (
    <div className={styles.Autocomplete}>
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        data-testid="searchValue-input"
      ></input>
      <Button
        buttonStyle="primary"
        label={"Search"}
        size={"medium"}
        click={search}
        data-testid="search-button"
      ></Button>
    </div>
  );
}

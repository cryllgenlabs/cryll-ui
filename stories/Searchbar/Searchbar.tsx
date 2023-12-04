import styles from "./Searchbar.module.scss";
import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface SearchbarProps {
  initialSearchValue?: string;
  search?: (value: string) => void;
}
export default function Searchbar({
  initialSearchValue = "",
  search = (value) => {
    alert(value);
  },
}: SearchbarProps) {
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
    <div className={styles.searchbar}>
      <Input
        inputType={"text"}
        placeholderText={"What do you want to watch?"}
        inputValue={searchValue}
        change={handleChange}
        keyup={handleKeyUp}
        data-testid="searchValue-input"
      ></Input>
      <Button
        buttonStyle="primary"
        label={"Search"}
        size={"medium"}
        click={() => search(searchValue)}
        data-testid="search-button"
      ></Button>
    </div>
  );
}

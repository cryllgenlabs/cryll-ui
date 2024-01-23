import styles from "./Autocomplete.module.scss";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { fixedPrediction } from "../../utils/api.imagineville";

interface AutocompleteProps {
  placeholder?: string;
  search?: (value: string) => void;
}
export default function Autocomplete({
  placeholder,
  search,
}: AutocompleteProps) {
  const [searchValue, setSearchValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [predictionValue, setPredictionValue] = useState("");
  const [cursorIndex, setCursorIndex] = useState(0);

  //------Hooks------//
  useEffect(() => {
    if (!searchValue) {
      setPredictions([]);
      setPredictionValue("");
    }

    if (searchValue.length > 2) {
      let prefixIndex = 0;
      for (let i = cursorIndex - 1; i >= 0; i--) {
        if (searchValue[i] === " ") {
          prefixIndex = i + 1;
          break;
        }
      }
      let left = searchValue.slice(0, prefixIndex - 1);
      let prefix = searchValue.slice(prefixIndex, cursorIndex);
      let right = searchValue.slice(cursorIndex + 1, searchValue.length);
      fixedPrediction(left, prefix, right).then((res) => {
        setPredictions(res.results);
        setPredictionValue(
          `${left.slice(0, prefixIndex)} ${res.results[0].text} ${right}`
        );
      });
    }
  }, [searchValue]);

  useEffect(() => {
    console.log("predictions", predictions);
  }, [predictions]);
  //------Event Handlers------//
  function handleChange(event): void {
    event.preventDefault();
    setCursorIndex(event.target.selectionStart);
    setSearchValue(event.target.value);
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      search(searchValue);
    }
  }

  function triggerSearch() {
    search(searchValue);
  }

  return (
    <div className={styles.Autocomplete}>
      <input
        className={styles.shadowInput}
        type="text"
        readOnly
        value={predictionValue}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        data-testid="searchValue-input"
        className={styles.mainInput}
      ></input>

      <Button
        buttonStyle="primary"
        label={"Search"}
        size={"medium"}
        click={triggerSearch}
        data-testid="search-button"
      ></Button>
    </div>
  );
}

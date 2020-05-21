import React from "react";
import styles from "./Controls.module.css";
import { useRecoilState } from "recoil";
import { allCarsState } from "../allCars";
import { CharacterCounter } from "../characterCounter";

function Controls() {
  const [,setAllCars] = useRecoilState(allCarsState);
  const onClickCarsButton = () => {
    fetch("https://fakecarsapi.appspot.com/")
      .then((res) => res.json())
      .then(setAllCars);
  };
  return (
    <div className={styles.controls}>
      <div>
        <p>Click here to get cars:</p>
        <p>
          <button onClick={onClickCarsButton}>Cars!!1!</button>
        </p>
      </div>
      <div>
        <p>Simple demo from Recoil docs:</p>
        <p>
          <CharacterCounter />
        </p>
      </div>
    </div>
  );
}

export default Controls;

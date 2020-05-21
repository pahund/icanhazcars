import React from "react";
import styles from "./Controls.module.css";
import { useRecoilState } from "recoil";
import { allCarsState } from "../allCars";
import { CharacterCounter } from "../characterCounter";
import { Button } from "../ui";

function Controls() {
  const [, setAllCars] = useRecoilState(allCarsState);
  const onClickCarsButton = async () => {
    const cars = await fetch("https://fakecarsapi.appspot.com/").then((res) =>
      res.json()
    );
    setAllCars(cars.map((car) => ({ ...car, selected: false })));
  };
  return (
    <div className={styles.controls}>
      <div>
        <p>Click here to get cars:</p>
        <p>
          <Button onClick={onClickCarsButton}>Cars!!1!</Button>
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

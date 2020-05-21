import React from "react";
import styles from "./AddCar.module.css";
import { Button } from "../ui";
import { useRecoilState } from "recoil";
import { allCarsState } from "../allCars";

function AddCar({ id }) {
  const [allCars, setAllCars] = useRecoilState(allCarsState);
  const onClick = () =>
    setAllCars(
      allCars.map((car) => ({
        ...car,
        selected: car.id === id ? true : car.selected,
      }))
    );
  return <Button className={styles.addCar} onClick={onClick}>I can haz!</Button>;
}

export default AddCar;

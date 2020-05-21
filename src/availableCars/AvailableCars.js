import React from "react";
import { useRecoilState } from "recoil";
import { allCarsState } from "../allCars";
import styles from "./AvailableCars.module.css";
import { Car } from "../car";

function AvailableCars() {
  const [allCars] = useRecoilState(allCarsState);
  return (
    <div className={styles.availableCars}>
      {allCars.map((car) => (
        <Car key={`car${car.id}`}{...car} />
      ))}
    </div>
  );
}

export default AvailableCars;

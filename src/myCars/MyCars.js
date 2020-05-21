import React from "react";
import styles from "./MyCars.module.css";
import { useRecoilValue } from "recoil";
import myCarsState from "./myCarsState";
import { Car } from "../car";

function MyCars() {
  const myCars = useRecoilValue(myCarsState);
  return (
    <div className={styles.myCars}>
      <header>My cars:</header>
      {myCars.map((car) => (
        <Car key={`car${car.id}`} small {...car} />
      ))}
    </div>
  );
}

export default MyCars;

import React from "react";
import { useRecoilValue } from "recoil";
import availableCarsState from "./availableCarsState";
import styles from "./AvailableCars.module.css";
import { Car } from "../car";

function AvailableCars() {
  const availableCars = useRecoilValue(availableCarsState);
  return (
    <div className={styles.availableCars}>
      {availableCars.map((car) => (
        <Car key={`car${car.id}`} available {...car} />
      ))}
    </div>
  );
}

export default AvailableCars;

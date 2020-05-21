import React from "react";
import styles from "./Car.module.css";
import { AddCar } from "../addCar";

function Car({
  id,
  image,
  location,
  make,
  mileage,
  price,
  title,
  available,
  small,
}) {
  return (
    <div className={`${styles.car} ${small ? styles.small : ""}`}>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong>
        <br />
        Location: {location}
        <br />
        Make: {make}
        <br />
        Mileage: {mileage}
        <br />
        price: {price}
      </div>
      {available && <AddCar id={id} />}
    </div>
  );
}

export default Car;

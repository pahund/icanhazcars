import React from "react";
import styles from "./Car.module.css";
import{AddCar}from'../addCar';

function Car({ image, location, make, mileage, price, title }) {
  return (
    <div className={styles.car}>
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
      <AddCar/>
    </div>
  );
}

export default Car;

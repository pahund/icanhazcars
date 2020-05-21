import React from "react";
import { Controls } from "../controls";
import { Header } from "../header";
import { AvailableCars } from "../availableCars";
import { MyCars } from "../myCars";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Controls />
      <AvailableCars />
      <MyCars />
    </div>
  );
}

export default App;

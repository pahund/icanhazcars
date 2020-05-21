import React from "react";
import { Car } from "../car";
import { Header } from "../header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Car />
    </div>
  );
}

export default App;

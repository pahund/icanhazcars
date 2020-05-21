import React from "react";
import { RecoilRoot } from "recoil";
import { AvailableCars } from "../availableCars";
import { Controls } from "../controls";
import { Header } from "../header";
import { MyCars } from "../myCars";
import styles from "./App.module.css";

function App() {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <Header />
        <Controls />
        <AvailableCars />
        <MyCars />
      </div>
    </RecoilRoot>
  );
}

export default App;

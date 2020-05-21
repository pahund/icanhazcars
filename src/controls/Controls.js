import React from "react";
import styles from "./Controls.module.css";
import { CharacterCounter } from "../characterCounter";

function Controls() {
  return (
    <div className={styles.controls}>
      <div>
        <p>Click here to get cars:</p>
        <p>
          <button>Cars!!1!</button>
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

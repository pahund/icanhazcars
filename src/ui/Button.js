import React from "react";
import styles from "./ui.module.css";

function Button({ children, onClick, className }) {
  return (
    <button className={`${className} ${styles.button}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

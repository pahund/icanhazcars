import React from "react";
import logo from "./logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        <strong>I Can Haz Cars</strong>
        <br />
        Recoil state management demo app
      </p>
    </header>
  );
}

export default Header;

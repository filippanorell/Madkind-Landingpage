import React from "react";
import styles from "./Highlights.module.css";

const Highlights = () => {
  return (
    <div className={styles.highlights}>
      <div className={styles.box}>
        <img src="/Photo25_25j.jpg" alt="Highlight 1" />
        <p>Discover our art</p>
      </div>
      <div className={styles.box}>
        <img src="/thaii.png" alt="Highlight 2" />
        <p>Discover our candles</p>
      </div>
    </div>
  );
};

export default Highlights;

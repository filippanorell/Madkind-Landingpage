import React from "react";
import styles from "./Highlights.module.css";

const Highlights = () => {
  return (
    <div className={styles.highlights}>
      <div className={styles.box}>
        <img
          src="/Photo25_25j.jpg"
          alt="Dove colored image of a window in the desert"
        />
        <p>Discover our art</p>
      </div>
      <div className={styles.box}>
        <img
          src="/thaii.png"
          alt="Image of a lit candle on a table and a beach and ocean in the background"
        />
        <p>Discover our candles</p>
      </div>
    </div>
  );
};

export default Highlights;

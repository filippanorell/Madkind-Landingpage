import React from "react";
import styles from "./Values.module.css";

const Values = () => {
  return (
    <div className={styles.values}>
      <div className={styles.box}>
        <h3>Kindness</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.box}>
        <h3>Honesty</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.box}>
        <h3>Transparency</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Values;

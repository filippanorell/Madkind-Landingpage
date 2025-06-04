import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="/Hero.jpg"
        alt="My beautiful forest"
        className={styles.heroImage}
      />
    </div>
  );
};

export default Hero;

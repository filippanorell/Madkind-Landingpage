import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="/Hero.jpg"
        alt="My beautiful forest image"
        className={styles.heroImage}
      />
      <a
        href="/Examensarbete_Filippa Norell_UXF23.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.heroButton}
        alt="Read our PDF"
      >
        Se min skriftliga rapport här!
      </a>
    </div>
  );
};

export default Hero;

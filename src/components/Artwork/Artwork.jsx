import React from "react";
import styles from "./Artwork.module.css";

const Artwork = () => {
  return (
    <div className={styles.artwork}>
      <h2>Selected artwork</h2>
      <div className={styles.grid}>
        <a href="#" className={styles.card}>
          <img src="/Photo13_14g.jpg" alt="Black and white image of a car" />
          <p>No. 07 - 499 SEK</p>
          <button>Add to cart</button>
        </a>

        <a href="#" className={styles.card}>
          <img src="/Photo27_29i.jpg" alt="Colored image of a flower bush" />
          <p>No. 05 - 499 SEK</p>
          <button>Add to cart</button>
        </a>

        <a href="#" className={styles.card}>
          <img
            src="/Photo16_16j.jpg"
            alt="Dove colored image of mountains and sky"
          />
          <p>No. 09 - 499 SEK</p>
          <button>Add to cart</button>
        </a>

        <a href="#" className={styles.card}>
          <img
            src="/Photo26_28g.jpg"
            alt="Colored image of trees in Joshua Tree"
          />
          <p>No. 09 - 499 SEK</p>
          <button>Add to cart</button>
        </a>
      </div>
    </div>
  );
};

export default Artwork;

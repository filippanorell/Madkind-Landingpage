import React from "react";
import styles from "./Artwork.module.css";

const Artwork = () => {
  return (
    <div className={styles.artwork}>
      <h2>Selected artwork</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/Photo13_14g.jpg" alt="art1" />
          <p>No. 07 - 499 SEK</p>
          <button>Add to cart</button>
        </div>
        <div className={styles.card}>
          <img src="/Photo27_29i.jpg" alt="art2" />
          <p>No. 05 - 499 SEK</p>
          <button>Add to cart</button>
        </div>
        <div className={styles.card}>
          <img src="/Photo16_16j.jpg" alt="art3" />
          <p>No. 09 - 499 SEK</p>
          <button>Add to cart</button>
        </div>
        <div className={styles.card}>
          <img src="/Photo26_28g.jpg" alt="art4" />
          <p>No. 09 - 499 SEK</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Artwork;

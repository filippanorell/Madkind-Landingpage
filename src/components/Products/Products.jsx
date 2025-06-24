import React from "react";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <h2>Selected products</h2>
      <div className={styles.grid}>
        <a href="#" className={styles.card}>
          <img src="/matcha glass.png" alt="240g matcha scented candle" />
          <p>抹茶</p>
          <p>240g 499 SEK</p>
          <button onClick={(e) => e.preventDefault()}>Add to cart</button>
        </a>

        <a href="#" className={styles.card}>
          <img src="/420 glass.png" alt="240g glass candle" />
          <p>420</p>
          <p>240g 499 SEK</p>
          <button onClick={(e) => e.preventDefault()}>Add to cart</button>
        </a>

        <a href="#" className={styles.card}>
          <img src="/bed linen.png" alt="Premium bed linen" />
          <p>Bed linen</p>
          <p>2599 SEK</p>
          <button onClick={(e) => e.preventDefault()}>Add to cart</button>
        </a>

        <a href="#" className={styles.card}>
          <img
            src="/99b1b7ab-96a1-41f9-8436-453006755bfa.png"
            alt="Premium bed linen"
          />
          <p>Bed linen</p>
          <p>299 SEK</p>
          <button onClick={(e) => e.preventDefault()}>Add to cart</button>
        </a>
      </div>
    </div>
  );
};

export default Products;

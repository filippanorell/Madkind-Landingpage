import React from "react";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products}>
      <h2>Selected products</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/matcha glass.png" alt="product1" />
          <p>240g</p>
          <p>499 SEK</p>
          <button>Add to cart</button>
        </div>
        <div className={styles.card}>
          <img src="/420 glass.png" alt="product2" />
          <p>420g</p>
          <p>499 SEK</p>
          <button>Add to cart</button>
        </div>
        <div className={styles.card}>
          <img src="/bed linen.png" alt="product3" />
          <p>Bed linen</p>
          <p>2599 SEK</p>
          <button>Add to cart</button>
        </div>
        <div className={styles.card}>
          <img src="/99b1b7ab-96a1-41f9-8436-453006755bfa.png" alt="product4" />
          <p>Essential oil</p>
          <p>299 SEK</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;

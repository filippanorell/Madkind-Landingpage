import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.subscribe}>
        <h3>Stay in the know</h3>
        <p>Subscribe to our mailing list and get 10% off your first purchase</p>
        <input type="email" placeholder="Email address" />
        <button>OK</button>
      </div>
      <div className={styles.info}>
        <div>
          <h4>Contact</h4>
          <p>info@madkind.se</p>
          <p>073 656 04 15</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>About</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>FAQ</p>
        </div>
        <div>
          <h4>Social</h4>
          <p>Instagram • LinkedIn</p>
        </div>
      </div>
      <div className={styles.rights}>
        &copy; 2024 Madkind AB. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.freeShipping}>
        Free shipping on all orders over 499 SEK. Currently only available in
        Europe.
      </div>

      <div className={styles.mainBar}>
        <div className={styles.logo}>
          <img
            src="/logotyp-frilagd.png"
            alt="Madkind logo"
            className={styles.logoImage}
          />
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <li>Home fragrances</li>
          <li>Bed linen</li>
          <li>Art</li>
        </ul>

        <div className={styles.rightIcons}>🔍 👤 🛒</div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;

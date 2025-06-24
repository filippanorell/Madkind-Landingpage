import React, { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleActive = (link) => setActive(link);

  return (
    <header className={styles.navbar}>
      <div className={styles.freeShipping}>
        Free shipping on all orders over 499 SEK. Currently only available in
        Europe.
      </div>

      <div className={styles.mainBar}>
        <div className={styles.logoWrapper}>
          <img
            src="/logotyp-frilagd.png"
            alt="Madkind company logo"
            className={styles.logoImage}
          />
        </div>

        <ul className={styles.navLinks}>
          {["home", "bed", "art"].map((key) => (
            <li key={key}>
              <a
                href="#"
                className={active === key ? styles.activeLink : ""}
                onClick={() => handleActive(key)}
                alt={`${key} category`}
              >
                {key === "home"
                  ? "Home fragrances"
                  : key === "bed"
                  ? "Bed linen"
                  : "Art"}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.desktopIcons}>
          <button
            className={styles.iconButton}
            onClick={() => handleActive("account")}
            alt="Account"
          >
            <FiUser className={styles.iconSvg} />
            <span className={styles.iconLabel}>Account</span>
          </button>
          <button
            className={styles.iconButton}
            onClick={() => handleActive("cart")}
            alt="Cart"
          >
            <FiShoppingCart className={styles.iconSvg} />
            <span className={styles.iconLabel}>Cart</span>
          </button>
        </div>

        {/* Hamburger toggle */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          alt={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile menu (inside hamburger) */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.iconButton} alt="Account">
            <FiUser className={styles.iconSvg} />
            <span>Account</span>
          </button>
          <button className={styles.iconButton} alt="Cart">
            <FiShoppingCart className={styles.iconSvg} />
            <span>Cart</span>
          </button>
        </div>
      )}

      {/* Mobile nav links */}
      <ul className={styles.mobileNavLinks}>
        <li>
          <a
            href="#"
            className={active === "home" ? styles.activeLink : ""}
            onClick={() => handleActive("home")}
            alt="Home fragrances"
          >
            Home fragrances
          </a>
        </li>
        <li>
          <a
            href="#"
            className={active === "bed" ? styles.activeLink : ""}
            onClick={() => handleActive("bed")}
            alt="Bed linen"
          >
            Bed linen
          </a>
        </li>
        <li>
          <a
            href="#"
            className={active === "art" ? styles.activeLink : ""}
            onClick={() => handleActive("art")}
            alt="Art"
          >
            Art
          </a>
        </li>
      </ul>

      {/* Always visible search bar with icon */}
      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
          <FiSearch className={styles.searchIcon} alt="Search icon" />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            alt="Search input field"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

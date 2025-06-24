import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.subscribe}>
        <h3>Stay in the know</h3>
        <p>Subscribe to our mailing list and get 10% off your first purchase</p>
        <input
          type="email"
          placeholder="Email address"
          aria-label="Enter your email"
        />
        <button aria-label="Subscribe to newsletter">OK</button>
      </div>

      <div className={styles.info}>
        <div>
          <h4>Contact</h4>
          <p>
            Email: <a href="mailto:info@madkind.se">info@madkind.se</a>
          </p>
          <p>Phone: 073 656 04 15</p>
        </div>

        <div>
          <h4>Help</h4>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Shipping</a>
          </p>
          <p>
            <a href="#">Returns</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
        </div>

        <div>
          <h4>Social</h4>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/madkindofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <FaInstagram title="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/107627926/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn"
            >
              <FaLinkedin title="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.rights}>
        &copy; 2024 Madkind AB. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

"use client";

import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <span>adii.</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            <li>
              <Link href="mailto:work.adii01@gmail.com">
                <span className={styles.navLink}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

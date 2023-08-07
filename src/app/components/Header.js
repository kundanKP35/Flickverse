"use client";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CgCloseR, CgMenu } from "react-icons/cg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbarBrand}>
          <Link href="/">
            <Image src="/nav-logo.svg" alt="KFLIX" width={150} height={45} />
          </Link>
        </div>

        <nav className={styles.navbar}>
          <div className={openMenu ? `${styles.active}` : ""}>
            <ul className={styles.navbarList}>
              <li className={styles.navbarItem}>
                <Link
                  className={styles.navbarLink}
                  href="/"
                  onClick={() => setOpenMenu(false)}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navbarItem}>
                <Link
                  className={styles.navbarLink}
                  href="/movies"
                  onClick={() => setOpenMenu(false)}
                >
                  Movies
                </Link>
              </li>
              <li className={styles.navbarItem}>
                <Link
                  className={styles.navbarLink}
                  href="/contact"
                  onClick={() => setOpenMenu(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className={styles["mobile-navbar-btn"]}>
              <CgMenu
                name="menu-outline"
                className={styles["mobile-nav-icon"]}
                onClick={() => setOpenMenu(true)}
              />
              <CgCloseR
                name="close-outline"
                className={`${styles["mobile-nav-icon"]} ${styles["close-outline"]}`}
                onClick={() => setOpenMenu(false)}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

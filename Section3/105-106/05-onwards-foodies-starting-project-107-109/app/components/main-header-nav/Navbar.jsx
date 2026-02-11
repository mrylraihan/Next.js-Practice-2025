import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import styles from './Navbar.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

function Navbar() {

  return (
    <>
    <MainHeaderBackground/>
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImage} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>                                          
          <li>
              <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
       {/* <Image src={logoImage} alt="A plate with food on it"  width={80} height={80} /> */}
    </header>
    </>
  );
}

export default Navbar;

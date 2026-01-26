import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo.png";
import styles from './Navbar.module.css'
import Image from "next/image";

function Navbar(props) {
  console.log("Navbar", props)
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImage} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">
              Meals
            </Link>
          </li>                                          
          <li>
            <Link href="/meals/share">
            Share
            </Link>
          </li>
          <li>
            <Link href="/community">
              community
            </Link>
          </li>
        </ul>
      </nav>
       <Image src={logoImage} alt="A plate with food on it"  width={80} height={80} />
    </header>
  );
}

export default Navbar;

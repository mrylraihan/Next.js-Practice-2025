import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <Link href="/" className={styles.navLink}><li>Home</li></Link>
        <Link href="/blog" className={styles.navLink}><li>Blog</li></Link>
        <Link href="/about" className={styles.navLink}><li>About</li></Link>
        <Link href="/services" className={styles.navLink}><li>Services</li></Link>
        <Link href="/contact" className={styles.navLink}><li>Contact</li></Link>
        <Link href="/kanye" className={styles.navLink}><li>Kanye</li></Link>
        <Link href="/kanye2" className={styles.navLink}><li>Kanye2</li></Link>
        <Link href="/kanye3" className={styles.navLink}><li>Kanye3</li></Link>
        <Link href="/form-test" className={styles.navLink}><li>Form-test</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar

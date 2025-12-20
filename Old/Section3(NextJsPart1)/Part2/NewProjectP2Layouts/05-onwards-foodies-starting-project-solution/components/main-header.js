import React from 'react'
import logoImg from '@/assets/logo.png'
import Link from 'next/link'
import classes from './main-header.module.css'
function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <img src={logoImg.src} alt='NextLevel Food Logo' />
                Next Level Food!
            </Link>
            <nav className={classes.nav}>
                <ul>
                <li><Link href='/community'>Community</Link></li>
                <li><Link href='/meals'>Meals</Link></li>
                <li><Link href='/meals/share'>Share Meals</Link></li>
                <li><Link href='/people'>People</Link></li>
                </ul>
                
            </nav>
        </header>
    )
}

export default MainHeader
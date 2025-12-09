import React from 'react'
import logoImg from '@/assets/logo.png'
import Link from 'next/link'
function MainHeader() {
    return (
        <header>
            <Link href='/'>
                <img src={logoImg.src} alt='NextLevel Food Logo' />
            </Link>
            <nav>
                <ul>
                <li><Link href='/community'>Community</Link></li>
                <li><Link href='/meals'>Meals</Link></li>
                <li><Link href='/meals/share'>Share Meals</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
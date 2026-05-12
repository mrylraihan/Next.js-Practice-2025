'use client'
import React from 'react'
import Link from 'next/link'
import NavLink from './nav-link'

function MainHeader() {
	return (
		<header id='main-header'>
			{/* <div id='logo'> */}
				<nav>
					<ul>
						<NavLink href='/'>NextNews</NavLink>
					</ul>
				</nav>
			{/* </div> */}
			<nav>
				<ul>
					<NavLink href='/news'>News</NavLink>
					<NavLink href='/archive'>Archived</NavLink>
					<NavLink href='/superHuman'>Super</NavLink>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader

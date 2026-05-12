'use client'
import React from 'react'
import NavLink from './nav-link';

function MainHeader() {
	return (
		<header id='main-header'>
			<div id='logo'>
				<NavLink href='/'>NextNews</NavLink>
			</div>
			<nav>
				<ul>
					<NavLink href={'/news'}>News</NavLink>
					<NavLink href={'/archive'}>Archived</NavLink>
					<NavLink href={'/superHuman'}>Super</NavLink>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader

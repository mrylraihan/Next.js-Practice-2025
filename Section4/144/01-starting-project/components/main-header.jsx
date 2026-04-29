import React from 'react'
import Link from 'next/link'

function MainHeader() {
	return (
		<header id='main-header'>
			<div id='logo'>
				<Link href='/'>NextNews</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link href='/news'>News</Link>
					</li>
					<li>
						<Link href='/archive'>Archived</Link>
					</li>
					<li>
						<Link href='/superHuman'>Super</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader

import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
		<div>
			<h1>Hero</h1>
            <header id='archive-header'>
            <ul>
                <li><Link href='/superHuman/super-man'>Super Man</Link></li>
                <li><Link href='/superHuman/bat-man'>Bat Man</Link></li>
                <li><Link href='/superHuman/green-lantern'>Green Lantern</Link></li>
            </ul>
            </header>
		</div>
	)
}

export default Hero
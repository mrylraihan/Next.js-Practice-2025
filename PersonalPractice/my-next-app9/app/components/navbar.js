import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link'

function Navbar() {
  return (
		<div className={styles.nav}>
			<Link href='/'>
				<p>Home</p>
			</Link>
			<Link href='/blogs-server'>
				<p>server side</p>
			</Link>
			<Link href='/blogs-client'>
				<p>client side</p>
			</Link>
			<Link href='/form-test'>
				<p>Testing useActionState</p>
			</Link>
			<Link href='/form-test2'>
				<p>Testing State</p>
			</Link>
			
		</div>
	)
}

export default Navbar
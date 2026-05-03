import React from 'react'
import styles from './page.module.css'
function page() {
  return (
		<div className={styles.maindiv}>
			<div>page</div>
			<div className={styles.maindi2}>
				<p>test 1</p>
				<p>test 2</p>
			</div>
			<div>page</div>
			<div>page</div>
			<div>page</div>
			<div>page</div>
		</div>
	)
}

export default page
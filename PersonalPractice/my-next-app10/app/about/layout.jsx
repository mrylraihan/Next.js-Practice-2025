import Image from 'next/image'
import styles from '../page.module.css'

export default function About({ children, aboutteam, aboutprogram }) {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				{children}
				{aboutteam}
				{aboutprogram}
			</main>
		</div>
	)
}

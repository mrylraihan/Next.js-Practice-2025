import Image from 'next/image'
import styles from '../page.module.css'

export default function About({ aboutteam, aboutprogram }) {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				{aboutteam}
				{aboutprogram}
			</main>
		</div>
	)
}

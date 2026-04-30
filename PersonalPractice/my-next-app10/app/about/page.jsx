import Image from 'next/image'
import styles from '../page.module.css'

export default function About() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
            <h1>About</h1>
				<Image
					// className={styles.logo}
					src='/Gundam-ExiaMotion.png'
					alt='Next.js logo'
					width={250}
					height={200}
					// priority
				/>
				<div className={styles.intro}>
					<h1>All About Next.js</h1>
					<p>
						Let keep our code dynamic and easy to understand with the clean {' '}
						<a
							href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
							target='_blank'
							rel='noopener noreferrer'>
							Templates
						</a>
					</p>
				</div>
				
			</main>
		</div>
	)
}

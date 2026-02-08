import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'

function MealsPage() {
    
  return (
    <div>
      <header className={styles.header}>
        <h1>
          Delcious meals, create <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your Meals</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </div>
  )
}

export default MealsPage

import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'
import { getAllMeals, getBlogs } from '@/lib/meals'
// import { useEffect } from 'react'

async function MealsPage() {
  // because this is a server component, we can not use useEffect here. So we need to fetch the data from the server and pass it to the component as props.

  // useEffect(()=>{
  //   fetch('/api/initdb')
  // },[])
  const meals = await getAllMeals()
  console.log("meals from db",meals)
  const blogs = await getBlogs()
  console.log("blogs from api",blogs)
    
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
        <MealsGrid meals={meals} />
      </main>
    </div>
  )
}

export default MealsPage

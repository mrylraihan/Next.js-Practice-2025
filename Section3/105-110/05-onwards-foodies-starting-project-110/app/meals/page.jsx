import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '../components/meals/meals-grid'
import { getAllMeals } from '@/lib/meals'
import Meal from './[meals-id]/page'
import { Suspense } from 'react'
import Loadings from './loading-out'
// import { useEffect } from 'react'

async function Meals(){
  const meals = await getAllMeals()
  console.log("meals from db",meals)
  return   <MealsGrid meals={meals} />
}

function MealsPage() {
  // because this is a server component, we can not use useEffect here. So we need to fetch the data from the server and pass it to the component as props.

  // useEffect(()=>{
  //   fetch('/api/initdb')
  // },[])
  // const meals = await getAllMeals()
  // console.log("meals from db",meals)
  // const blogsAwait = await getBlogs()
  // console.log("blogs from api",blogsAwait)
  // const blogs = await getBlogsNoAsync()
  // console.log("blogs from api await", blogs)
    
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
        <Suspense fallback={<Loadings/>}>
        <Meals /> 
        </Suspense >
        {/* <MealsGrid meals={meals} /> */}
      </main>
    </div>
  )
}

export default MealsPage

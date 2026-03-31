import React from 'react'
import styles from './page.module.css'
import { getMealBySlug } from '@/lib/meals'
import Image from 'next/image'
import { notFound } from 'next/navigation'


async function Meal({params}) {
  const paramsData = await params
  console.log("paramsData",paramsData)
    let data = await getMealBySlug(paramsData.mealsSlug)
    console.log("data", data)

    if(!data){
      notFound();
    }

    data.instructions = data.instructions.replace(/\n/g, "<br />")
  return (
    <>
    <header className={styles.header}>
      <div className={styles.image}>
        <Image fill src={data.image} alt={data.title} />
      </div>
      <div className={styles.headerText}>
        <h1>Title: {data.title}</h1>
        <p className={styles.creator}>by <a href={`mailto:${data.creator_email}`}>{data.creator}</a></p>
        <p className={styles.summary}>{data.summary}</p>
      </div>
    </header> 
    <main>
    <p className={styles.instructions} dangerouslySetInnerHTML={{
      __html:data.instructions
    }}></p>
    </main>
    </>
  )
}

export default Meal

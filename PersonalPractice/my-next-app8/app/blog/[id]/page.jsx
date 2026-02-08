"use client"
import SingleBlogContent from '@/app/components/SingleBlogContent'
import React from 'react'
import styles from "./page.module.css";
import { useParams } from 'next/navigation';

function SingleBlog() {
  const params = useParams();
  const id = params.id;
// async function SingleBlog({params}) {
    // const {id} = await params
    // const id = paramData.id
  return (
     <div className={styles.page}>
      <main className={styles.main}>
          <h1>Single Blog Post: {id}</h1>
      <SingleBlogContent id={id} />
      </main>
    </div>
  )
}

export default SingleBlog

import SingleBlogContent from '@/app/components/SingleBlogContent'
import React from 'react'
import styles from "../../page.module.css";

async function SingleBlog({params}) {
    const paramData = await params
    const id = paramData.id
  return (
     <div className={styles.page}>
      <main className={styles.main}>
          {/* <h1 className={styles.title}>
           Single Blog Post: {id}
          </h1> */}
      <SingleBlogContent id={id} />
      </main>
    </div>
  )
}

export default SingleBlog

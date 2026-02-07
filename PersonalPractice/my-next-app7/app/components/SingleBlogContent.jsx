'use client';
import React, { useEffect, useState } from 'react'
import styles from './SingleBlogContent.module.css'
import { useRouter } from 'next/navigation';

function SingleBlogContent({ id }) {
    const router = useRouter();
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching blog post:', error));
    }, [id]);
    
    if (!data) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
            </div>
        );
    }
  return (
    <div className={styles.blogContent}>
      <h2 className={styles.blogTitle}>{data.title}</h2>
      <p className={styles.blogBody}>{data.body}</p>
      <button className={styles.blogButton} onClick={() => router.back()}>← Go back</button>
    </div>
  )
}


export default SingleBlogContent

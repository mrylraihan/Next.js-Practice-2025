import React from 'react'
import styles from './loading.module.css'
// import styles2 from './meals/page.module.css'
// import Link from 'next/link'
function Loadings() {
  return (
    <>
      {/* <header className={styles2.header}>
        <h1>
          Delcious meals, create <span className={styles2.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={styles2.cta}>
          <Link href="/meals/share">Share your Meals</Link>
        </p>
      </header> */}
    <div className={styles.loading}>
      <p>Loading...</p>
    </div>
    </>
  )
}

export default Loadings

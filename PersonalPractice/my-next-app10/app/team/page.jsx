import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
import teamArrs from '../lib/teamArrs'
function Team() {
  return (
    <div className={styles.page}>
			<main className={styles.main}>
        <h1>Our Team</h1>
        {teamArrs.map((member, index) => (
            <Link href={`/team/${index}`} key={index}>
                <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            </Link>
        ))}
        </main>
    </div>
  )
}

export default Team
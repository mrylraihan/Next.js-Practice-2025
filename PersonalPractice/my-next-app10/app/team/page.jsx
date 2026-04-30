import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
function Team() {
    const teamArr = [
        {name:"Wayel Raihan", role:"Frontend Developer"},
        {name:"John Doe", role:"Backend Developer"},
        {name:"Jane Smith", role:"UI/UX Designer"},
        {name:"Alice Johnson", role:"Project Manager"},
        {name:"Bob Brown", role:"Data Analyst"}
    ]
  return (
    <div className={styles.page}>
			<main className={styles.main}>
        <h1>Our Team</h1>
        {teamArr.map((member, index) => (
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
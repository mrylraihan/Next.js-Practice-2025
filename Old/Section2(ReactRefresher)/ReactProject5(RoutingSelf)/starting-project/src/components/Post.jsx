import React from 'react'
import styles from './Post.module.css'
import { Link } from 'react-router-dom'
function Post({author, body, id}) {
    console.log(id)
  return (
		<Link to={`/single/${id}`}>
		<li className={styles.post}>
			<p className={styles.author}>{author}</p>
			<p className={styles.text}>{body}</p>
		</li>
		</Link>
	)
}

export default Post

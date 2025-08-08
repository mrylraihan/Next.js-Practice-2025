import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from './Modal'
import styles from './Post.module.css'
import styles2 from './PostList.module.css'
import { useEffect, useState } from 'react'


function SinglePost({ posts }) {
	const [post, setPost] = useState({ author: '', body: '' })
	const params = useParams()
	const id = params.id
	const nav = useNavigate()
	console.log(id)
	useEffect(() => {
		const data = posts.find((post) => post.id === id)
		setPost(data)
	})
	return (
		<div>
			<Modal>
				<div className={styles2.posts}>
					<li className={styles.post}>
						<p className={styles.author}>{post.author}</p>
						<p className={styles.text}>{post.body}</p>
					</li>
				</div>
				<button onClick={nav.bind(this, -1)}>Back {id}</button>
			</Modal>
		</div>
	)
}

export default SinglePost

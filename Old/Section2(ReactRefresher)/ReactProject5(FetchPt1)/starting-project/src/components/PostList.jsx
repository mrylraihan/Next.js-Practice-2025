import React, { useEffect, useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

function PostList({ modalIsVisible, hideModalHandler }) {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		getData()
	}, [])
	const getData = async () => {
		const res = await fetch('http://localhost:8080/posts')
		const data = await res.json()
		console.log(data)
		setPosts(data.posts)
	}
	const addPostHandler = (postData) => {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(console.log)
		setPosts((prev) => [postData, ...prev])
	}
	console.log("POST:", posts)
	return (
		<>
			{/* {modalContent} */}
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post, idx) => (
						<Post author={post.author} body={post.body} key={idx} />
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no Post yet.</h2>
					<p>Lets start adding some!</p>
				</div>
			)}
		</>
	)
}

export default PostList

import React, { useEffect, useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

function PostList({ posts, isLoading }) {
	

	console.log('POST:', posts)
	return (
		<>
			{isLoading && (
				<p style={{ textAlign: 'center', color: 'white' }}>
					The Content is Loading....
				</p>
			)}

			{posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post, idx) => (
						<Post author={post.author} body={post.body} key={idx} id={post.id} />
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

import React, { useEffect, useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import {Outlet, useLoaderData} from 'react-router-dom'
function PostList() {
	const loader = useLoaderData()


	console.log("Loader Data PostList", loader)

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
	return (
		<>
			{loader.posts.length > 0 && (
				<ul className={styles.posts}>
					{loader.posts.map((post, idx) => (
						<Post author={post.author} body={post.body} key={idx} />
					))}
				</ul>
			)}
			{loader.posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no Post yet.</h2>
					<p>Lets start adding some!</p>
				</div>
			)}
		</>
	)
}

export default PostList

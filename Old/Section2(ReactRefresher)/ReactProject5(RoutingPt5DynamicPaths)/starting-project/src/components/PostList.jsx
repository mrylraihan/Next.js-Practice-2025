import React from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import {Outlet, useLoaderData} from 'react-router-dom'
function PostList() {
	const loader = useLoaderData()


	console.log("Loader Data PostList", loader)

	
	return (
		<>
			{loader.posts.length > 0 && (
				<ul className={styles.posts}>
					{loader.posts.map((post, idx) => (
						<Post author={post.author} body={post.body} key={idx} id={post.id}/>
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

import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'


function PostList({ modalIsVisible, hideModalHandler }) {
	const [posts, setPosts] = useState([])
	const addPostHandler = (postData)=>{
		setPosts(prev=>[postData, ...prev])
	}

	return (
		<>
			{/* {modalContent} */}
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.length > 0 && <ul className={styles.posts}>
				{posts.map((post,idx) => (
					<Post author={post.author} body={post.body} key={idx} />
				))}
			</ul>}
			{posts.length === 0 && (
				<div style={{textAlign:'center', color:'white'}}>
					<h2>There are no Post yet.</h2>
					<p>Lets start adding some!</p>
				</div>
			)}
			
		</>
	)
}

export default PostList

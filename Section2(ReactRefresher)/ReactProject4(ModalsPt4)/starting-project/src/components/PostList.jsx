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
			<ul className={styles.posts}>
				{posts.map((post,idx) => (
					<Post author={post.author} body={post.body} key={idx} />
				))}
			</ul>
		</>
	)
}

export default PostList

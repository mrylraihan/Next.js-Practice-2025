import React from 'react'
import Modal from './Modal'
import NewPost from './NewPost'

function PostPage({
	modalIsVisible,
	hideModalHandler,
	setPosts
}) {
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
	// console.log('POST:', posts)
	return (
		<div>
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
				</Modal>
			)}
		</div>
	)
}

export default PostPage

import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'


function PostList({ modalIsVisible, hideModalHandler }) {
	const [enteredBody, setEnteredBody] = useState('')
	const [enteredAuthor, setEnteredAuthor] = useState('')

	console.log(modalIsVisible)
	const changeBodyHandler = (e) => {
		setEnteredBody(e.target.value)
	}
	const changeAuthorHandler = (e) => {
		setEnteredAuthor(e.target.value)
	}
	// let modalContent;
	// if (modalIsVisible){
	// 	modalContent = (
	// <Modal onClose={hideModalHandler}>
	// 	<NewPost
	// 		changeBodyHandler={changeBodyHandler}
	// 		changeAuthorHandler={changeAuthorHandler}
	// 	/>
	// </Modal>
	// 	)
	// }
	return (
		<>
			{/* {modalContent} */}
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost
						changeBodyHandler={changeBodyHandler}
						changeAuthorHandler={changeAuthorHandler}
					/>
				</Modal>
			)}
			<ul className={styles.posts}>
				<Post author={enteredAuthor} body={enteredBody} key={1} />
				<Post author={'Heshow'} body={'Next.js is Awesome!'} key={2} />
			</ul>
		</>
	)
}

export default PostList

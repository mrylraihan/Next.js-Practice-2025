import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'


function PostList({ modalIsVisible, hideModalHandler }) {

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
						onCancel={hideModalHandler}
					/>
				</Modal>
			)}
			<ul className={styles.posts}>
				<Post author={'Heshow'} body={'Next.js is Awesome!'} key={2} />
			</ul>
		</>
	)
}

export default PostList

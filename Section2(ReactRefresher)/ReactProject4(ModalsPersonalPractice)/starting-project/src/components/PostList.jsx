import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'


function PostList() {
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const changeBodyHandler = e =>{
		setEnteredBody(e.target.value)
	}
	const changeAuthorHandler = e =>{
		setEnteredAuthor(e.target.value)
	}
	const isModalOpen = ()=>setOpenModal(!openModal)
  return (
		<>
			{!openModal && <button onClick={isModalOpen}>Create Post</button>}
			{openModal && (
				<Modal openModal={openModal}>
					<NewPost
						changeBodyHandler={changeBodyHandler}
						changeAuthorHandler={changeAuthorHandler}
						isModalOpen={isModalOpen}
						openModal={openModal}
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

import React, { useState } from 'react'
import Post from './Post'
import styles from './PostList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'

const listPost = [
	{ author: 'Heshow', body: 'Next.js is Awesome!' },
	{ author: 'Wallie', body: 'React.js is Awesome!' },
]
function PostList({ modalIsVisible, hideModalHandler }) {
	const [enterValues, setEnteredValues] = useState({author:'',body:''})
	const [postList, setPostList]= useState(listPost)
	
	console.log(enterValues)
	console.log(modalIsVisible)

	const submitForm = (e) =>{
		e.preventDefault()
		setPostList(prev=>{
			return [enterValues, ...prev]
		})
		setEnteredValues({ author: '', body: '' })
		hideModalHandler()
	}

	const changeBodyHandler = (e) => {
		setEnteredValues(prev=>{
			return {...prev, body:e.target.value}
		})
	}
	const changeAuthorHandler = (e) => {
		setEnteredValues((prev) => {
			return { ...prev, author: e.target.value }
		})
	}



	return (
		<>
			{/* {modalContent} */}
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost
						changeBodyHandler={changeBodyHandler}
						changeAuthorHandler={changeAuthorHandler}
						inputValues={enterValues}
						submitForm={submitForm}
					/>
				</Modal>
			)}
			<ul className={styles.posts}>
				{postList.map(({ author, body }, idx) => {
					return <Post author={author} body={body} key={idx} />
				})}
			</ul>
		</>
	)
}

export default PostList

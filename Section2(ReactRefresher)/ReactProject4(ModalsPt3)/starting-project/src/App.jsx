import Post from './components/Post'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
	const [modalIsVisible, setModalIsVisible]= useState(false)
	const showModalHandler = () => setModalIsVisible(true)
	const hideModalHandler = () => setModalIsVisible(false)
	return (
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<PostList
					modalIsVisible={modalIsVisible}
					hideModalHandler={hideModalHandler}
				/>
			</main>
		</>
	)
}

export default App

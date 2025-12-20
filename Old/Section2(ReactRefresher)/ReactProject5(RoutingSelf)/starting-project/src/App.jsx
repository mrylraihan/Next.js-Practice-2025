import Post from './components/Post'
import PostList from './components/PostList'
import MainHeader from './components/MainHeader'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PostPage from './components/PostPage'
import { useEffect } from 'react'
import SinglePost from './components/SinglePost'

function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const showModalHandler = () => setModalIsVisible(true)
	const hideModalHandler = () => setModalIsVisible(false)
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	
		useEffect(() => {
			getData()
		}, [])
		const getData = async () => {
			setIsLoading(true)
			const res = await fetch('http://localhost:8080/posts')
			const data = await res.json()
			console.log(data)
			setPosts(data.posts)
			setIsLoading(false)
		}

	console.log('POST:', posts)
	return (
		<Router>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<Routes>
					<Route
						path='/'
						element={
							<PostList
								posts={posts}
								setPosts={setPosts}
								isLoading={isLoading}
							/>
						}
					/>
					<Route
						path='/post'
						element={
							<PostPage
								modalIsVisible={modalIsVisible}
								hideModalHandler={hideModalHandler}
								setPosts={setPosts}
							/>
						}
					/>
					<Route path='/single/:id' element={<SinglePost posts={posts}/>}/>
				</Routes>
			</main>
		</Router>
	)
}

export default App

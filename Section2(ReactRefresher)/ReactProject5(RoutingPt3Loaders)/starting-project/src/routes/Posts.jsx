import PostList from '../components/PostList'
import { Outlet, useLoaderData } from 'react-router-dom'

function Posts() {
	const data = useLoaderData()
	console.log("Post", data)
	return (
		<>
			<Outlet />
			<main>
				<PostList />
			</main>
		</>
	)
}

export default Posts

export const loader = async () =>{
	const response = await fetch('http://localhost:8080/posts')
	const res = await response.json()
	return res
	
}
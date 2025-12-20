import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import MainHeader from './components/MainHeader'

function App() {
	const loader = useLoaderData()
	console.log(loader)
	return (
		<>
			<MainHeader />
			<Outlet />
		</>
	)
}

export default App

export function loaderData() {
	return { message: 'Hey im in the loader data' }
}

// src/routes.js
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Extra from '../components/Extra'
import List from '../components/List'
import SingleItem from '../components/SingleItem'
import RootLayout from '../App' // Optional layout wrapper

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />, // Wraps all routes (optional)
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/extra',
				element: <Extra />,
			},
			{
				path: '/list',
				element: <List />,
			},
			{
				path: '/list/:id',
				element: <SingleItem />,
			},
		],
	},
])

export default router

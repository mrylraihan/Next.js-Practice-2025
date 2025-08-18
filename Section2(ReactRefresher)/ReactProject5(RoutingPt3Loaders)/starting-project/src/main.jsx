import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts , {loader as loaderDataPost}from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom' 
import NewPost from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import About from './components/About'
import TestForm from './components/TestForm'
import LoaderTest, {loader as loaderData} from './components/LoaderTest'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Posts />,
				loader: loaderDataPost,
				children: [{ path: '/create-post', element: <NewPost /> }],
			},
			{ path: '/about', element: <About /> },
			{ path: '/test-form', element: <TestForm /> },
			{path:'/loader-test', element:<LoaderTest/>, loader: loaderData}
		],
	},
])

// layout routes are used for navbars and nest other routes inside of them 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

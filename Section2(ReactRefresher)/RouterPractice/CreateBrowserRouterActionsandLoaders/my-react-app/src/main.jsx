import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Form1, { action as formAction } from './components/Form1.jsx'
import LoaderTest, { loader as loaderData } from './components/LoaderTest.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		children: [
			{ index: true, element: <App /> },
			{ path: '/form', element: <Form1 /> , action :formAction },
			{ path: '/loader', element: <LoaderTest />, loader: loaderData },
		],
	},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

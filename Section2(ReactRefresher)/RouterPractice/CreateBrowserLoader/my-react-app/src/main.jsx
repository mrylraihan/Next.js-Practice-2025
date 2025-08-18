import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App , {loaderData}from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import More from './components/More.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {path:'/', element:<App/>, loader: loaderData, children:[
    {index:true, element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/more', element:<More/>}
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)

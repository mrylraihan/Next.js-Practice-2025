import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import List from './components/List';
import More from './components/More';
import Home from './components/Home';
import SingleItem from './components/SingleItem';

const router = createBrowserRouter([
  {index:'/', element:<App/>, children:[
    {index:true, element:<Home/>},
    {path:'/about', element:<About/>},
    {path:'/more', element:<More/>},
    {path:'/list', element:<List/>},
    {path:'/list/:id', element:<SingleItem/>},
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

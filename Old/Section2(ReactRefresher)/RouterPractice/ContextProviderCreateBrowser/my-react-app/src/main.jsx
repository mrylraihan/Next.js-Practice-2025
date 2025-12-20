import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyContextProvider } from './context/MyContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyContextProvider>
    <RouterProvider router={router}/>
    </MyContextProvider>
  </StrictMode>,
)

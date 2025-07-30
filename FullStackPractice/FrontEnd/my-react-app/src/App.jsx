import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AddName from './components/AddName'

function App() {
 

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/about'} element={<About/>}/>
      <Route path={'/add'} element={<AddName/>}/>
    </Routes>
    </Router>
  )
}

export default App

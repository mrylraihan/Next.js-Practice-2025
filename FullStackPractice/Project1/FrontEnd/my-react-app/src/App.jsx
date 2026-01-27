import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AddName from './components/AddName'
import ListComps from './components/ListComps'
import ListComps2 from './components/ListComps2'
import ListComps3 from './components/ListComps3'

function App() {
 

  return (
    <Router>
    <Navbar/>
    <Routes>
      {/* <Route path={'/'} element={<Home/>}/>
      <Route path={'/about'} element={<About/>}/>
      <Route path={'/add'} element={<AddName/>}/> */}
      {/* <Route path={'/'} element={<ListComps/>} /> */}
      {/* <Route path={'/'} element={<ListComps2/>} /> */}
      <Route path={'/'} element={<ListComps3/>} />
    </Routes>
    </Router>
  )
}

export default App

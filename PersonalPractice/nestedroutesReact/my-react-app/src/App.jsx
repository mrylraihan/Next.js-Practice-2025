import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import More from './components/More'
import More1 from './components/More1'
import More2 from './components/More2'
import More3 from './components/More3'
import More0 from './components/More0'
function App() {
  

  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/more'>More</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/more' element={<More/>}>
        <Route index element={<More0/>}/>
        <Route path='more1' element={<More1/>}/>
        <Route path='more2' element={<More2/>}/>
        <Route path='more3' element={<More3/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

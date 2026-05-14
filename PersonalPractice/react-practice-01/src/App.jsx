import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Team1 from './pages/about/Team1'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path=":team" element={<Team1 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </Router>
  )
}

export default App

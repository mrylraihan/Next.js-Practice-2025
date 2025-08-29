import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import List from './components/List'
import About from './components/About'
import Navbar from './components/Navbar'
import Single from './components/Single'
import Second from './components/Second'
import SecondItem from './components/SecondItem'
import ThirdItem from './components/ThirdItem'
import FourthItem from './components/FourthItem'
import MForm from './components/MForm'
function App() {

  return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />
					<Route path='/mform' element={<MForm />} />
					<Route path='/list' element={<List />} />
					<Route path='/list/:id' element={<Single />} />
					<Route path='/about' element={<About />} />
					<Route path='/second' element={<Second />}>
						<Route path='/second/:id' element={<SecondItem />}>
							<Route path='/second/:id/:idS' element={<ThirdItem />}>
								<Route path='/second/:id/:idS/:idX' element={<FourthItem />} />
							</Route>
						</Route>
					</Route>
				</Routes>
			</Router>
		</>
	)
}

export default App

import React from 'react'
import { useState } from 'react'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

function App() {
  const [toggle, setToggle] = useState(true)
  return (
		<div>
			{toggle ? (
				<Test1 toggle={toggle} setToggle={setToggle} />
			) : (
				<Test2 toggle={toggle} setToggle={setToggle} />
			)}
    </div>
	)
}

export default App

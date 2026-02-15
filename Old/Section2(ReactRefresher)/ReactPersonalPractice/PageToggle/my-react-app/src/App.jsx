import React, { useEffect } from 'react'
import { useState } from 'react'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

export const ShowBlogDetails=()=>{
	const [data, setData] = useState({})
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/posts/1")
		.then(res=>res.json())
		.then(data=>{
			return setTimeout(()=>{
				console.log("Timed Out")
				setData(data)
			},2000)
		})
	},[])
	console.log(data)
	if(data.title){
		return <h1>{data.title}</h1>
	}else{
		return <h3>...Loading</h3>
	}
}

function App() {
  const [toggle, setToggle] = useState(true)
  return (
	<>
	<div>
		<ShowBlogDetails/>
	</div>
	<div>
		{toggle ? (
			<Test1 toggle={toggle} setToggle={setToggle} />
		) : (
			<Test2 toggle={toggle} setToggle={setToggle} />
		)}
    </div>
	</>
	)
}

export default App

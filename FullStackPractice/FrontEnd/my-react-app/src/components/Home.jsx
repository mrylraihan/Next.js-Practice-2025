import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Home() {
     const [data, setData] = useState([])
			useEffect(() => {
				fetch('http://localhost:3030/names')
					.then((res) => res.json())
					.then(setData)
					.catch(console.error)
			}, [])
			console.log(data)
  return (
		<div>
			<h1>Home</h1>
			{data.length > 0 &&
				data.map((ele) => {
					return (
						<div key={ele.firstName}>
							<h3>{`${ele.firstName} ${ele.lastName}`}</h3>
							<p>{ele.age}</p>
						</div>
					)
				})}
		</div>
	)
}

export default Home

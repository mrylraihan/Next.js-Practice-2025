import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function List() {
	const [list, setList] = useState([])
	const nav = useNavigate()
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json) => {
				setList(json)
				return json
			})
			.catch(console.error)
	}, [])

	let content = list.map((ele) => {
		return (
			<div key={ele.id} onClick={nav.bind(this, `${ele.id}`)}>
				<h1>{ele.title}</h1>
				<p>{ele.body}</p>
			</div>
		)
	})

	console.log(list)
	return (
		<div>
			<h1>List</h1>
			{content}
		</div>
	)
}

export default List

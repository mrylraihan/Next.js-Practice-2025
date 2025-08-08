import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function List() {
	const [list, setList] = useState([])
    const nav = useNavigate()
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then(setList)
			.catch(console.error)
	}, [])

    let content = list.length != 0 ? list.map(item=>{
        return (
					<div key={item.id}>
						<p>{item.title}</p>
						<button onClick={nav.bind(this, `/list/${item.id}`)}>See more</button>
					</div>
				)
    }) : <p>Loading ...</p>

	return <div>
        {content}
    </div>
}

export default List

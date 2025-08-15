import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function List() {
  const [list, setList] = useState([])
  const nav = useNavigate()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then(setList)
			.catch(console.error)
  },[])
  console.log(list)
  return (
    <div>
      <h1>List</h1>
      {list.map((ele)=>{
        return (
					<button onClick={nav.bind(this, `${ele.id}`)}>
						{ele.title} :{ele.id}
					</button>
				)
      })}
    </div>
  )
}

export default List

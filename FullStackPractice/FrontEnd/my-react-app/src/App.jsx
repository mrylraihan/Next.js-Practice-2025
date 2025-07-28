import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3030/names')
    .then(res=>res.json())
    .then(setData)
    .catch(console.error)
  },[])
  console.log(data)

  return (
    <>
     {data.length>0 && data.map(ele=>{
        return (
					<div key={ele.firstName}>
						<h3>{`${ele.firstName} ${ele.lastName}`}</h3>
						<p>{ele.age}</p>
					</div>
				)
     })}
    </>
  )
}

export default App

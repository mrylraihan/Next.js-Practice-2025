import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [data, setData] = useState([
		{ title: 'Mike is Right' },
		{ title: 'John is Wrong' },
		{ title: 'John is always Wrong' },
	])
  const deleteData = (index) => {
    const newData = data.filter((item, i) => i !== index)
    setData(newData)
  }
  return (
		<div>
			<h1>My Todos</h1>
			{/* {data.map((ele, index) => <Todo title={ele.title} idx={index} deleteHandler={deleteData}/>))} */}
			{data.map((ele, index) => (
				<Todo
					key={index}
					title={ele.title}
					// idx={index}
					deleteHandler={deleteData.bind(this, index)}
				/>
			))}
		</div>
	)
}

export default App

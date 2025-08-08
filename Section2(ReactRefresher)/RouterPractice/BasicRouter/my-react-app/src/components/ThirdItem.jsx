import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

function ThirdItem() {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const nav = useNavigate()
	const params = useParams()
	console.log(params)
	return (
		<div>
			<h1>Third</h1>
			<div>
				{nums.map((num) => {
					return (
						<button key={num} onClick={nav.bind(this, `${num}`)}>
							{num}
						</button>
					)
				})}
			</div>
			<Outlet />
		</div>
	)
}

export default ThirdItem

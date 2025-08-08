import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Second() {
	const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const nav= useNavigate()
	return (
		<div>
			<h1>Second</h1>
			<div>
				{nums.map((num) => {
					return (
						<button key={num} onClick={nav.bind(this, `/second/${num}`)}>
							{num}
						</button>
					)
				})}
			</div>
			<Outlet />
		</div>
	)
}

export default Second

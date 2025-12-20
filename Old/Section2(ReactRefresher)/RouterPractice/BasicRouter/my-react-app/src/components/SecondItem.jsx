import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

function SecondItem() {
	const params = useParams()
	const idS = params.id
    const nav = useNavigate()
	console.log(idS)

	if (+idS == 3) {
		return (
			<div>
				<h1>Second Item {idS} </h1>
                <button onClick={nav.bind(this, 'test')}>Click</button>
				<Outlet />
			</div>
		)
	} else {
		return (
			<div>
				<h1>Second Item {idS}</h1>
			</div>
		)
	}
}

export default SecondItem

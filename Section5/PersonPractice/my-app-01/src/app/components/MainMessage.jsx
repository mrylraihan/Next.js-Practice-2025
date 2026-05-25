'use server';
import React from 'react'

async function MainMessage() {
const res = await fetch('http://localhost:3000/api/hello')
	const data = await res.json()
	return <div>Main Message from API: {data.message}</div>
}

export default MainMessage

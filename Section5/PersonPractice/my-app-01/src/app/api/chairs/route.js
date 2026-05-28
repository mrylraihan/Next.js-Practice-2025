import { NextResponse } from 'next/server'
import db from '../../lib/db'

// GET all chairs
export async function GET() {
	try {
		const chairs = db.prepare('SELECT * FROM chairs').all()
		await new Promise((resolve) => setTimeout(resolve, 2000))
		return NextResponse.json(chairs)
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}

// POST a new chair
export async function POST(request) {
	try {
		const body = await request.json()
		const { name, price } = body

		const insert = db.prepare('INSERT INTO chairs (name, price) VALUES (?, ?)')
		const result = insert.run(name, price)

		return NextResponse.json(
			{ id: result.lastInsertRowid, name, price },
			{ status: 201 },
		)
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 })
	}
}

import { NextResponse } from 'next/server'

export function GET() {
    return new Response(JSON.stringify({ message: 'Hello World!' }), {
			headers: { 'Content-Type': 'application/json' },
		})
}

// export function GET() {
//     return NextResponse.json({ message: "Hello World!" })
// }
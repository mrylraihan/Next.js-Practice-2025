import { NextResponse } from "next/server";

export async function GET() {
const data = await fetch('http://localhost:8000/news');
const news = await data.json();

return  NextResponse.json(news)
}
// export async function GET() {
// const data = await fetch('http://localhost:8000/news');
// const news = await data.json();

// return new Response(JSON.stringify(news), {
//   headers: { 'Content-Type': 'application/json' },      
// })
// }
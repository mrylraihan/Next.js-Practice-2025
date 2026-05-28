export function GET(request){
const data = request.url
console.log("body",request.body)
console.log(data)
return Response.json({ data: data })
}

export async function POST(request){
const data = request.url
const body = await request.json()
console.log("body",request.body)
console.log(data)
return Response.json({ data: data, body: body })
}
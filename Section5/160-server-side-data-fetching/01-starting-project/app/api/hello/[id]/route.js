export async function GET(request, {params}){
const id = params.id
return Response.json({message:"in dynamic route Get", id:id})
}

export async function POST(request, {params}){
const id = params.id
const body = await request.json()
return Response.json({message:"in dynamic route Post", id:id, req:body})
}

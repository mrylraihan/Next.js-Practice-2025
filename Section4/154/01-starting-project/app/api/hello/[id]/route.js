export async function POST(request, {params}){
const id = params.id
const body = await request.json()
return Response.json({message:"in dynamic route", id:id, req:body})
}


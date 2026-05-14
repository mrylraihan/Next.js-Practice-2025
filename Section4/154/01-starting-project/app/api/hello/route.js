export function GET(){
    return Response.json({
        message:"hello"
    })
}

export async function POST(request){
    const body = await request.json()
    return Response.json({message:"hello", req:body})
}
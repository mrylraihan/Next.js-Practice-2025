export async function GET(req, res){
    const param = await res.params
    const id = await param.id
    console.log(param);
    console.log(req)
    console.log(res)
    return  Response.json({message: `Hello, ${id}!`})
}
export function GET(req, res){
    const paramData = res.params
    return Response.json({
        message:"hello",
        paramData:paramData
    })
}
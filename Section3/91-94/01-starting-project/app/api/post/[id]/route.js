export async function GET(request, { params }) {
  console.log(params.id)
 const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+params.id)
    const newData = await data.json()
    console.log(newData)
  return Response.json({newData})
}
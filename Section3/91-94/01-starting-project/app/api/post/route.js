export async function GET(request) {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const newData = await data.json()
  return Response.json({newData});
}
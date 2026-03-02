export const getAllBlogs = () => {
    new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Blogs data from API")
            }, 3000)
        })
 return fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
}
export const getKaneyQuote = async ()=>{
    await new Promise((r)=>setTimeout(r,2000))
    const res = await fetch('https://api.kanye.rest/')
    const response = await  res.json()
    return response
}
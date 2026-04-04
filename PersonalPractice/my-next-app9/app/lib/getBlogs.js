export async function getBlogs() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const blogs = await res.json()
    return blogs
}
export async function getBlogsSingle(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const blog = await res.json()
    return blog
}
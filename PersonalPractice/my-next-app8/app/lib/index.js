export const getAllBlogs = () => {
    new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Blogs data from API")
            }, 3000)
        })
 return fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
}

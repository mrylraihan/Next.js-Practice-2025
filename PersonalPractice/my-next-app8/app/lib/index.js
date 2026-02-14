export const getAllBlogs = () => {
 return fetch('https://jsonplaceholder.typicode.com/posts')
 .then(response => response.json())
}
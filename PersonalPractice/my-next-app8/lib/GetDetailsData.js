async function getDetailsData() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await res.json()
    return data
}
export default getDetailsData;
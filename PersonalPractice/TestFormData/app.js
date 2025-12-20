const form = document.querySelector('form')

const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)
}

form.addEventListener('submit', submitHandler)
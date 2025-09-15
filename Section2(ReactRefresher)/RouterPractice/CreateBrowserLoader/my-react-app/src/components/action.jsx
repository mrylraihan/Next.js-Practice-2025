import { redirect } from "react-router-dom"

export async function formAction({ request }) {
	const formData = await request.formData()
	console.log(Object.fromEntries(formData))
	return redirect('/')
}

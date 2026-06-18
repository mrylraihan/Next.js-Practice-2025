
import FormSubmit from "@/components/form-submit"
import PostForm from "@/components/post-form"
import { storePost } from "@/lib/posts"
import { redirect } from "next/navigation"


export default function NewPostPage() {
	// Server Action
	async function createPost(state, formData) {
		'use server'
		const data = Object.fromEntries(formData)
		console.log(data)
	
		let errors = []
		if (!data.title || data.title.trim().length === 0) {
			errors.push('Title is required.')
		}
		if (!data.content || data.content.trim().length === 0) {
			errors.push('Content is required.')
		}
		if (!data.image || data.image.size === 0) {
			errors.push('Image is required.')
		}
	
		if (errors.length > 0) {
			return { errors }
		}
	
		await storePost({ ...data, userId: 1, imageUrl: '' })
		redirect('/feed')
	}

	return <PostForm createPost={createPost} />
}

'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'

const isInvalidTest = (text) => {
	return !text || text.trim() === ''
}

export async function shareMeal(prevState, formData) {
	console.log("prevState", prevState)// we need this because we are using useActionState, which will pass the second arg as the initial state

	await new Promise((resolve) => setTimeout(resolve, 3000))
	const mealData = {
		creator: formData.get('name'),
		creator_email: formData.get('email'),
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
	}
	if (
		isInvalidTest(mealData.title) ||
		isInvalidTest(mealData.summary) ||
		isInvalidTest(mealData.instructions) ||
		isInvalidTest(mealData.creator) ||
		isInvalidTest(mealData.creator_email) ||
		!mealData.creator_email.includes('@') ||
		mealData.image.size === 0
	) {
		console.log('Invalid meal data:', mealData)
		// throw new Error('Invalid meal data')
		return {
			message: 'Invalid meal data. Please fill in all required fields correctly.',
		}
	}
	console.log(mealData)
	await saveMeal(mealData)
	revalidatePath('/meals', 'layout')//this will revalidate the cache for the /meals page, so that when we redirect to it, we will see the new meal that we just added. This is because the /meals page is a server component, and it will fetch the data from the server every time it is rendered. So when we revalidate the cache, it will fetch the new data from the server and render it.
	redirect('/meals')
}

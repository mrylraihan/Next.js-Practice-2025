'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'

const isInvalidTest = (text) => {
	return !text || text.trim() === ''
}

export async function shareMeal(formData) {
	setTimeout(() => {}, 3000)
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
		throw new Error('Invalid meal data')
	}
	console.log(mealData)
	await saveMeal(mealData)
	redirect('/meals')
}

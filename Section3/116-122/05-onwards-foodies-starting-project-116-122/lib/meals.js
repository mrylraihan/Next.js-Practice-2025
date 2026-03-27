import fs from 'fs'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
const db = sql('meals.db')

export async function getAllMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate a delay
	const stmt = db.prepare('SELECT * FROM meals').all()
	console.log('from lib getAllMeals:', stmt)
	//   return stmt
	// throw new Error("Simulated error in getAllMeals") // Simulate an error
	return stmt
}

export function getMealBySlug(slug) {
	const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?')
	return stmt.get(slug)
}

export function addMeal(meal) {
	const stmt = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)
	const info = stmt.run(
		meal.slug,
		meal.title,
		meal.image,
		meal.summary,
		meal.instructions,
		meal.creator,
		meal.creator_email,
	)
	return info.lastInsertRowid
}

export function deleteMealBySlug(slug) {
	const stmt = db.prepare('DELETE FROM meals WHERE slug = ?')
	stmt.run(slug)
}

export function updateMealBySlug(slug, updatedMeal) {
	const stmt = db.prepare(`
    UPDATE meals
    SET title = ?, image = ?, summary = ?, instructions = ?, creator = ?, creator_email = ?
    WHERE slug = ?
  `)
	stmt.run(
		updatedMeal.title,
		updatedMeal.image,
		updatedMeal.summary,
		updatedMeal.instructions,
		updatedMeal.creator,
		updatedMeal.creator_email,
		slug,
	)
}

export async function getBlogs() {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts')
	return data.json()
}
export function getBlogsNoAsync() {
	return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
		response.json(),
	)
}

export async function saveMeal(meal) {
	meal.slug = slugify(meal.title, { lower: true })
	meal.instructions = xss(meal.instructions)

	const extension = meal.image.name.split('.').pop()
	const fileName = `${meal.slug}.${extension}`
	const stream = fs.createWriteStream(`./public/images/${fileName}`)
	const bufferedImage = await meal.image.arrayBuffer()
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) {
			console.error('Error saving image:', error)
			throw new Error('Failed to save image')
		}
	})
	meal.image = `/images/${fileName}`
	db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (
      @slug,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
    `).run(meal)
}

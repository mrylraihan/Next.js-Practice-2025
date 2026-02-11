import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const stmt = db.prepare('SELECT * FROM meals').all();
  console.log(stmt)
//   return stmt
return stmt
}

export function getMealBySlug(slug) {
  const stmt = db.prepare('SELECT * FROM meals WHERE slug = ?');
  return stmt.get(slug);
}

export function addMeal(meal) {
  const stmt = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(
    meal.slug,
    meal.title,
    meal.image,
    meal.summary,
    meal.instructions,
    meal.creator,
    meal.creator_email
  );
  return info.lastInsertRowid;
}

export function deleteMealBySlug(slug) {
  const stmt = db.prepare('DELETE FROM meals WHERE slug = ?');
  stmt.run(slug);
}

export function updateMealBySlug(slug, updatedMeal) {
  const stmt = db.prepare(`
    UPDATE meals
    SET title = ?, image = ?, summary = ?, instructions = ?, creator = ?, creator_email = ?
    WHERE slug = ?
  `);
  stmt.run(
    updatedMeal.title,
    updatedMeal.image,
    updatedMeal.summary,
    updatedMeal.instructions,
    updatedMeal.creator,
    updatedMeal.creator_email,
    slug
  );
}           

export function getBlogs(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
        
}
import db from './db.js'

// Drop and recreate for a clean slate
db.exec(`
  DROP TABLE IF EXISTS chairs;
  CREATE TABLE IF NOT EXISTS chairs (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    name  TEXT NOT NULL,
    price INTEGER NOT NULL
  )
`)

const insert = db.prepare('INSERT INTO chairs (name, price) VALUES (?, ?)')

const chairs = [
	{ name: 'Office Chair', price: 299 },
	{ name: 'Gaming Chair', price: 499 },
	{ name: 'Standing Desk Chair', price: 399 },
	{ name: 'Bar Stool', price: 149 },
]

// Use a transaction — inserts all rows at once, faster and safer
const insertMany = db.transaction((chairs) => {
	for (const chair of chairs) {
		insert.run(chair.name, chair.price)
	}
})

insertMany(chairs)

console.log('✅ Database seeded!')

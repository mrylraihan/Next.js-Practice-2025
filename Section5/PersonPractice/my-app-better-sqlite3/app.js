const express = require('express')
const app = express()
const cors = require('cors')
const sql = require('better-sqlite3')

const PORT = 4000
const db = new sql('data.db')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const DUMMY_Chair = [
    { id: 1, name: 'herman-miller', price: 30 },
    { id: 2, name: 'knoll', price: 25 },
    { id: 3, name: 'human-scale', price: 35 },
]

function initDb() {
  db.exec(
    'DROP TABLE IF EXISTS chairs;'
  );
  db.exec(
    'CREATE TABLE IF NOT EXISTS chairs (id INTEGER PRIMARY KEY, name TEXT, price INTEGER)'
  );
//   db.exec(
//     'CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)'
//   );
//   db.prepare(
//     'CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)'
//   ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM chairs').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO chairs (name, price) VALUES (?, ?)'
    );

    DUMMY_Chair.forEach((chair) => {
      insert.run(chair.name, chair.price);
    });
  }
}

app.get('/', (req, res) => {
    res.json({message:'Hello from the Express server!'})
    // console.log("Received request for news data...")
    // const news = db.prepare('SELECT * FROM news').all()
    // res.json(news)
})

app.get('/chair', (req, res) => {
    const chairs = db.prepare('SELECT * FROM chairs').all()
    res.json(chairs)
})

initDb()

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})  
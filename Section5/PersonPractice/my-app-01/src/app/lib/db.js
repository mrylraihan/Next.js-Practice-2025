import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data.db')

const db = new Database(dbPath)

// Create tables on startup
db.exec(`
  CREATE TABLE IF NOT EXISTS chairs (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    name  TEXT NOT NULL,
    price INTEGER NOT NULL
  )
`)

export default db

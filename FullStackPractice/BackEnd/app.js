const express = require('express')
const app = express()
const PORT = 3030
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const nameController = require('./controllers/nameControllers')

app.use('/names', nameController)

app.get('/', (req, res)=>res.json({message:"We are Live!"}))

const listener = ()=>console.log(`we are live on port ${PORT} `)

app.listen(PORT, listener)
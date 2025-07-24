const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const postController = require('./controllers/post_routers')

app.use('/posts', postController)

app.get('/', (req, res)=>{
    res.json({message:"First Route"})
})

const listener = () => console.log(`Now live on Port ${PORT}`)

app.listen(PORT, listener)

const express = require('express')
const router = express.Router()

const data = require('../data/data')

router.get('/', (req, res)=>res.json(data))

router.get('/:name', (req, res)=>{
    const name = data.find(data=>data.name === req.name)
    res.json(name)
})

router.post('/', (req, res)=>{
    data.push(req.body)
    res.json(data)
})


module.exports = router
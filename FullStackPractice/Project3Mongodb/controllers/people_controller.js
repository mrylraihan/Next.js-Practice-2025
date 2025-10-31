const express = require('express');
const router = express.Router();
const Person = require('../models/people');

router.get('/',async (req, res)=>{
    const people = await Person.find().select('-__v -updatedAt -createdAt');
    res.json(people);
})
router.get('/getOne/:id',async (req, res)=>{
    const id = req.params.id;
    const people = await Person.find({ _id: id }).select('-__v -updatedAt -createdAt');
    res.json({messgae:"found in GetOne", people});
})

router.get('/:id',async (req, res)=>{
    const id = req.params.id;
    const person = await Person.findById(id).select('-__v -updatedAt -createdAt');
    res.json(person);
})

router.post('/', async (req, res)=>{
    const { name, age, email } = req.body;
    try {
        const savedPerson = await Person.create({ name, age, email });
        res.status(201).json(savedPerson);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
})

router.put('/:id', async (req, res)=>{
    const id = req.params.id;
    const { name, age, email } = req.body;
    try {
        const updatedPerson = await Person.findByIdAndUpdate(id, { name, age, email }, { new: true, runValidators: true }).select('-__v -updatedAt -createdAt');
        res.json(updatedPerson);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})

router.delete('/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedPerson = await Person.findByIdAndDelete(id).select('-__v -updatedAt -createdAt');
        res.json(deletedPerson);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
})

module.exports = router;
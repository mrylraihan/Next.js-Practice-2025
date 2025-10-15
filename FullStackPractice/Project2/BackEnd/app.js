// getting our framework 
const express = require('express');
const app = express();
const data = require('./data');
const cors = require('cors');
app.use(cors());
// setting up port
const PORT = 4000;

// middleware allowing us to get data from the frontend and json data
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json({message:"We are live "});
})

app.get('/anime', (req, res)=>{
    res.json(data);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const cors = require('cors')
// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase')


// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
// Sample route
const peopleRouter = require('./controllers/people_controller');
app.use('/people', peopleRouter);

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'});
});

app.use((req, res)=>{
  res.status(404).json({message: 'Route not found'});
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;

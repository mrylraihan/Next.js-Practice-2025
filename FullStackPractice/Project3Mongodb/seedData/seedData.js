const mongoose = require('mongoose');
const Person = require('../models/people');

mongoose.connect('mongodb://localhost/mydatabase')

const seedData = [
    { name: 'Goku', age: 39, email: 'goku@dragonball.example' },
    { name: 'Vegeta', age: 42, email:   'vegeta@dragonball.example' },
    { name: 'Piccolo', age: 45, email: 'piccolo@dragonball.example' },
    { name: 'Gohan', age: 28, email: 'gohan@dragonball.example' },
    { name: 'Krillin', age: 38, email: 'krillin@dragonball.example' },
    { name: 'Bulma', age: 41, email: 'bulma@dragonball.example' },
    { name: 'Trunks', age: 21, email: 'trunks@dragonball.example' },
    { name: 'Goten', age: 18, email: 'goten@dragonball.example' },
    { name: 'Yamcha', age: 36, email: 'yamcha@dragonball.example' },
    { name: 'Tien Shinhan', age: 40, email: 'tien@dragonball.example' },
    { name: 'Master Roshi', age: 150, email: 'roshi@dragonball.example' },
    { name: 'Frieza', age: 1000, email: 'frieza@dragonball.example' },
    { name: 'Android 18', age: 33, email: 'android18@dragonball.example' },
    { name: 'Android 17', age: 33, email: 'android17@dragonball.example' },
    { name: 'Majin Buu', age: 5, email: 'buu@dragonball.example' },
    { name: 'Beerus', age: 1000, email: 'beerus@dragonball.example' }
];


const insertSeed = async () => {
    try {
        await Person.deleteMany({});
        await Person.insertMany(seedData);
        console.log("Seed data inserted successfully");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting seed data:", error);
    }
}

insertSeed();
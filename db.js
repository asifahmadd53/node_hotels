const mongoose = require('mongoose'); 
require('dotenv').config()

// const mongoURL = 'mongodb://localhost:27017/hotels'

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected',()=>{
    console.log('connected to database')
})

db.on('error', console.error.bind(console, 'connection error:'));


db.on('disconnected', console.error.bind(console, 'Dicconnection error:'));

module.exports = db;

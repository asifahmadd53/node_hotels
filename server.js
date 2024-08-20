const express = require('express')

const app = express();

const db = require('./db')
const person = require('./models/person')
const menuItem =  require('./models/menu')

app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can i help you?')
})

const bodyparser = require('body-parser')
app.use(bodyparser.json())


// Get Method


const personRoutes = require('./routes/personroutes')
app.use('/person', personRoutes);


const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes)

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// const data = req.body
//     const newPerson = new person(data)

//     newPerson.save((error, savedPerson)=>{
//         if(error){
//             console.log(error);
//             res.status(500).json({error: 'Internal server Error'})
//         }else{
//             console.log('data saved succesfully');
//             res.status(200).json(savedPerson)
//         }
//     })
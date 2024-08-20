const express = require('express')
const person = require('../models/person');
// const Person = require('../models/person');
const router = express.Router()


router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new person(data);
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error' });
    }
});

router.get('/', async (req, res)=>{
    try{
        const data = await person.find()
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal error' });
    }
})


router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await person.find({ work: workType });
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await person.findByIdAndUpdate(id,data ,{
            new:true,
            runValidators:true 
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }
        res.status(200).json(response);
    }
    catch{
        res.status(500).json({ error: 'Internal error' });
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json({ error: 'Internal error' }); 
    }
})


module.exports = router; 
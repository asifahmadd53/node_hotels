const express =  require('express')
const router = express.Router()

const menuItem = require('../models/menu')

router.post('/',async (req, res)=>{
    try{
        const data = req.body
        const newItem = new menuItem(data)
        const savedItem = await newItem.save()
        res.status(200).json(savedItem)
    }
    catch{
        console.log(err);
        res.status(500).json({ error: 'Internal error' });
    }
})



router.get('/', async(req, res)=>{
    try{
        const data = await menuItem.find()
        res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal Error'})
    }
})

// module exports

module.exports = router;
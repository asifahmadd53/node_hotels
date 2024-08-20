const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
    },
    isDrink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:[String],
        default:[],
        enum: ['sweet', 'spicy', 'sour']
    }
})

const  menuItems = mongoose.model('menuItem', menuItemSchema)
module.exports = menuItems;
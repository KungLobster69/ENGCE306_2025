const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = mongoose.Schema({
    name:{type: String,required:true},
    price:{type:Number,required:true,default:0},
    quantity:{type:Number,required:true,default:0},
},{
    timeStamps:true
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;
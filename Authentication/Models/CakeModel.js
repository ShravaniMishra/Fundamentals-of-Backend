const mongoose = require("mongoose");

const cakeSchema = mongoose.Schema({
    name:String,
    price:Number

},{
    versionKey:false,
})

const CakeModel = mongoose.model('users',cakeSchema)

module.exports = {
    CakeModel
}
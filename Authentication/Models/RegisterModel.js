const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number

},{
    versionKey:false,
})

const RegisterModel = mongoose.model('users',registerSchema)

module.exports = {
    RegisterModel
}
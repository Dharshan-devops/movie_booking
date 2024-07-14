const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema(
{
    email:{
        type:String,
        required: true,
        unique:true,
        min:[7,'min length is not satified'],
        max:[30,'email is not too long']
    },
    password:{
        type:String,
        min:[8,'min pass leghth is 8'],
        max:[20,'pass is not so long']
    }
})

const User = new mongoose.model('users',userSchema)
module.exports = User
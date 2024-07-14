const mongoose = require('mongoose')
const { Schema } = mongoose;

const castSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }
}
)


module.exports = Cast

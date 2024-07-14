const mongoose = require('mongoose')
const { Schema } = mongoose;


const seatSchema=new Schema({
    seat_id:{
        type:Number,
        required: true
    },
    status:{
        type:String,
        required:true
    }
})

const theatreSchema = new Schema(
{   
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    seats:[seatSchema]
})

const Theatre = new mongoose.schema('bookings',theatreSchema)
module.exports = Theatre
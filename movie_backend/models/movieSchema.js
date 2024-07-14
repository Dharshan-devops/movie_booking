const mongoose = require('mongoose')
const { Schema } = mongoose;

const movieSchema = new Schema(
{
    name:{
        type:String,
        required: true
    },
    genre:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    wideposterUrl:{
        type:String,
        required:true
    },
    screenType:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    cast:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Cast
    }
})

const Movie = new mongoose.schema('bookings',bookingSchema)
module.exports = Movie
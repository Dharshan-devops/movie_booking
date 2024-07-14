const mongoose = require('mongoose');
const Movie = require('./movieSchema')
const Theatre = require('./theatreSchema')
const { Schema } = mongoose;

const showSchema = new Schema(
{
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Movie
    },
    thetreId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Theatre
    },
    time:{
        type:Date,
        required:true
    },
    seats: Array
})

const Show = new mongoose.schema('bookings',showSchema)
module.exports = Show

const mongoose = require('mongoose')
const { Schema } = mongoose;

const ticketSchema = new Schema(
{
    showId:{
        type:mongoose.Schema.Types.ObjectId
    },
    
})

const ticket = new mongoose.schema('ticket',ticketSchema)
module.exports = ticket
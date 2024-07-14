const express=require('express')
const app=express()
const movie = require('./routes/movie')


const mongoose =require('mongoose')
const logger=require('./logger')

mongoose.connect("mongodb://localhost:27017/",{
    dbName:"showtime"

}).then(()=>{
    logger.info("Connected to Database")
})


app.use('/v1',movie)
app.listen(9000,(res,err)=>{
    if(!err){
        console.log("server is up")
    }

})
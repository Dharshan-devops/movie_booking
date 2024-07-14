const express = require('express')
const router = express.Router()

const User =require('../models/userModel')

router.get('/test',async (req,res)=>{
    console.log('/test endpoint is working')
    const data= await User({
        email:"dharshan",
        password:"dharshan@2002"
    })

    await data.save()
})




module.exports=router

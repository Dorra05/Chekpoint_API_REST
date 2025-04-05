const express = require('express');
const route = express.Router();
const {User}= require('../models/userSchema');

route.post('/addUser', async(req , res)=> {
    try {
        
        const newUser = new User ({
            name:req.body.name,
            age:req.body.age,
            email:req.body.email,
            profession: req.body.profession
        })
        await newUser.save()
        res.status(200).json({newUser})
    } catch (error) {
        res.status(400).json({error})
    }
   

})

route.get('/getUsers', async(req , res)=> {
    try {
        const allUsers = await User.find()
        res.status(200).json({allUsers})
    } catch (error) {
        res.status(400).json({error})
    }
})


route.get(`/getOneUser/:id`, async(req , res)=>{
    try {
         const oneUser = await User.findById(req.params.id)
         res.status(200).json({oneUser})

    } catch (error) {
        res.status(400).json({error})
    }
})

route.delete(`/deleteOneUser/:id`, async(req , res)=> {
    try {
        const  deletedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({deletedUser})
    } catch (error) {
        res.status(400).json({error})
    }
})

route.put(`/updateUser/:id`, async(req ,res)=>{
    try {
        const theNewUpdate = {
            name: req.body.name,
            age: req.body.age,
            email:req.body.email,
            profession: req.body.profession
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id , theNewUpdate, {new:true})
        res.status(200).json({updatedUser})
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = route
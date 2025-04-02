let express=require('express');
let route=express.Router();
let {model}=require('../models/user');


route.get('/users', async (req, res) => {
    try {
        const users = await model.find(); // Fetch all users from the database
        res.status(200).json(users); // Send the users as JSON response
    } catch (err) {
        res.status(400).json({ message: 'Error fetching users', error: err.message });
    }
})
route.post('/newuser', async(req,res)=>{
    try {
        const newOne = new model ({
           name:req.body.name,
           age:req.body.age,
           email:req.body.email
        })
        await newOne.save()
            res.status(200).json({newOne})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
route.put('/updateOne/:id', async (req,res)=>{
    const newup= req.body;
    try {
        const updated = await model.findByIdAndUpdate(req.params.id , newup , {new:true});
        updated.save();
        res.status(200).json({updated});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
route.delete('/deleted/:id', async (req,res)=>{
    try {
        const deleted = await model.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'deleted',deleted});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})





module.exports={route};
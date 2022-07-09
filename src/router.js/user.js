const express=require('express');
const router=new express.Router();

const User=require('../models/usermessage');

router.get('/',(req,res)=>{
    res.render('index');
})

router.post('/contact',async(req,res)=>{
    try{
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render('index');
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports=router;

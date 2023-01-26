const express = require('express');
const router = express.Router();
require("../db/connection");
const Form = require("../model/formSchema");

router.post('/',(req,res)=>{
    const data = req.body;
    const formData = new Form(data)
    formData.save((err,result)=>{
        if(err){
            console.log(err)
            res.json('error')
        }   
        else{
            console.log(result)
            res.json(result)
        }
    })
})
router.get('/:id',(req,res)=>{
    const {id} = req.params
    Form.findById(id,(err,form)=>{
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            res.json(form)
        }
    })
})
module.exports = router;
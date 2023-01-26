const express = require('express');
const router = express.Router();
require("../db/connection");
const Response = require("../model/responseSchema")

router.post('/',(req,res)=>{
    const data = req.body
    const response  = new Response(data)
    response.save((err,result)=>{
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            console.log(result)
            res.json(result)
        }
    })
})

router.get("/:id",(req,res)=>{
    const {id} = req.params
    Response.find({formId:id},(err,document)=>{
        if(err){
            console.log(err)
            res.json(err)
        }
        else{
            res.json(document)
        }
    })
})

module.exports = router;
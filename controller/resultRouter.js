const express=require('express');
const mongoose=require('mongoose');

const resultSchema=require("../model/resultSchema");
const resultRoute=express.Router();

resultRoute.post("/uploadResult",(req,res)=>{
    resultSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            try {
                const data = resultSchema(req.body);
                res.json(data);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    })
})

resultRoute.get("/getResults",(req,res)=>{
    resultSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data)
        }
    })
})

resultRoute.route("/updateResults/:id")
.get((req,res)=>{
    resultSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    resultSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})

resultRoute.delete("/deleteResult/:id",(req,res)=>{
    resultSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            return res.json(data);
        }
    })
})

module.exports=resultRoute
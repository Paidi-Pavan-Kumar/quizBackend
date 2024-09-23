const express = require("express");
const mongoose=require("mongoose");

const studentRoute=express.Router();
const studentSchema=require('../model/studentSchema');

studentRoute.post("/createStudent",(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err){
            console.log(err)
            return err
        }
        else{
            try {
                const data = studentSchema(req.body);
                console.log("User Craeted")
                res.json(data);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    })
})
studentRoute.get('/getStudent',(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})
studentRoute.route("/updateStudent/:id")
.get((req,res)=>{
    studentSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})


module.exports=studentRoute;
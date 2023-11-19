const express=require('express');
const mongoose=require('mongoose');
const instructorRoute=express.Router();
const instructorSchema=require('../model/instructorSchema')

instructorRoute.post('/createInstructor',(req,res)=>{
    instructorSchema.create(req.body,(err,data)=>{
        if(err){
            return err;
        }
        else{
            try {
                const data = instructorSchema(req.body);
                res.json(data);
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        }
    })
})


instructorRoute.get('/getInstructor',(req,res)=>{
    instructorSchema.find((err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data)
        }
    })
})

instructorRoute.route("/updateInstructor/:id")
.get((req,res)=>{
    instructorSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
}).put((req,res)=>{
    instructorSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),{$set: req.body},(err,data)=>{
        if(err){
            return err;
        }
        else{
            res.json(data);
        }
    })
})

module.exports=instructorRoute;
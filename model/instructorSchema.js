const mongoose=require("mongoose");

const instructorSchema=new mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "password":{type:String},
},{
    collection:"instructor"
})

module.exports=mongoose.model("instructorSchema",instructorSchema);
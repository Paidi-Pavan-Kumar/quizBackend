const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    "name":{type:String},
    "email":{type:String},
    "password":{type:String}
},{
    collection:"student"
})

module.exports=mongoose.model("studentSchema",studentSchema);
 
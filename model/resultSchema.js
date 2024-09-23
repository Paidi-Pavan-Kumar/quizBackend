const mongoose=require('mongoose');

const resultSchema=mongoose.Schema({
    "studentID":{type:String},
    "instructorID":{type:String},
    "testID":{type:String},
    "testCode":{type:String},
    "testName":{type:String},
    "testTakenTime":{type:Date},
    "score":{type:String},
    "answersGiven":{type:Array},
    "questions":{type:Array},
    "option1":{type:Array},
    "option2":{type:Array},
    "option3":{type:Array},
    "option4":{type:Array},
    "answers":{type:Array},
},{
    collection:'testResults'
})
 
module.exports=mongoose.model("resultSchema",resultSchema);
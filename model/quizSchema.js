const mongoose=require('mongoose');

const quizSchema=mongoose.Schema({
    "instructorID":{type:String},
    "testName":{type:String},
    "testCode":{type:String},
    "testStartTime":{type:Date},
    "testEndTime":{type:Date},
    "resultsTime":{type:Date},
    "users":{type:Boolean},
    "question":{type:Array},
    "option1":{type:Array},
    "option2":{type:Array},
    "option3":{type:Array},
    "option4":{type:Array},
    "answer":{type:Array}
},{
    collection:"test"  
})

module.exports=mongoose.model("quizSchema",quizSchema);
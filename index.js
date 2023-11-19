const ejs = require('ejs');
const express=require('express');
var app=express();
app.set("viewengine",ejs);

const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require('cors');

const instructorRoute=require("./controller/instructorRouter");
const studentRoute = require('./controller/studentRouter');
const quizRoute=require('./controller/quizRouter');
const resultRoute=require('./controller/resultRouter')

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://leelasumanth:11079@cluster0.jhri1bn.mongodb.net/userDB");

var db=mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/Route",instructorRoute);
app.use("/Route",studentRoute);
app.use("/Route",quizRoute);
app.use("/Route",resultRoute);

db.on('open',()=>console.log("Connected to DB"));
db.on('error',()=>console.log("Error Occured"));

app.listen(4000,()=>console.log("Server started at 4000"));

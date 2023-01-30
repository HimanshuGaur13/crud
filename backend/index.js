const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const route = require('./Router/route')
var app = express();
const cors = require('cors');
const logs = require('morgan');
const port = process.env.express ||4504
const url = ""


    mongoose.set('strictQuery',false);
mongoose.connect(url).then((res)=>{
    try{
        if(res){
            console.log(" my database is connnected sucessfully")
        }
    }catch(err){
        console.log(err)
    }
})

app.use(cors());
app.use(logs('dev'));
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('',route)
app.listen(port,()=>{
    console.log("my server is running ",port)
})




const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')

var app = express()
const port = process.env.express ||4504
const url = "mongodb://localhost:27017/Crud"
mongoose.connect(url).then((res)=>{
    try{
        if(res){
            console.log(" my database is connnected sucessfully")
        }
    }catch(err){
        console.log(err)
    }
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.listen(port,()=>{
    console.log("my server is running ",port)
})




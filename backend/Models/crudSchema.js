const mongoose=require('mongoose')
const crudSchema=mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    product:{
        type:String,
        required:true

    }
})
const Crud = mongoose.model('crudData', crudSchema)
module.exports = Crud;
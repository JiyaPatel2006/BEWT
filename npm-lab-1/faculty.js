const mongoose=require('mongoose')
const facultyschema= new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    experience:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model("Faculty",facultyschema)
const express = require('express');
const mongoose = require('mongoose');
const app=express();

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/studentDB')
.then(() => console.log("Student connected"))
.catch(err => console.log(err));

//student schema
const studentschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
});
const Student=mongoose.model("Faculty",studentschema);

//create

app.post("/api/student",async(req,res)=>{
    try{
        const newstudent=new Student(req.body)
        const savedStudent = await newstudent.save()
        res.status(201).json(savedStudent);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.get("/api/student",async(req,res)=>{
    try{
            const students=await Student.find();
            res.json(students);
        }catch(error){
            res.status(500).json({error:error.message})
        }
})

app.get("/api/student/:id",async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id);
        if(!student) return res.status(404).send("student not found")
        res.json(student);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.put("/api/student/:id",async(req,res)=>{
    try{
        const updatedstudent=await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updatedstudent) return res.status(404).send("student not found")
            res.json(updatedstudent)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/api/student/:id",async (req,res)=>{
    try{
        const result=await Student.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("student not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})

app.listen(3000, () => {
    console.log("server start");
});


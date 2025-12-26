const express=require('express')
const faculty=require('./faculty');
const app=express();

app.post("/",async(req,res)=>{
    try{
        const faculty=new faculty(req.body)
        const savedfaculty=await faculty.save()
        res.status(201).json(savedfaculty);

    }catch(error){
        res.status(400).json({error:error.message()})
    }
})

app.get("/",async(req,res)=>{
    try{
        const faculty=await faculty.find();
        res.json(faculty);
    }
    catch(error){
         res.status(401).json({error:error.message()})
    }
})
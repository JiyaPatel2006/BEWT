const express = require('express');
const mongoose = require('mongoose');
const app=express();

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/facultyDB')
.then(() => console.log("Faculty connected"))
.catch(err => console.log(err));

//faculty schema
const facultyschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
});
const Faculty=mongoose.model("Faculty",facultyschema);

//create

app.post("/api/faculty",async(req,res)=>{
    try{
        const newfaculty=new Faculty(req.body)
        const savedFaculty = await newfaculty.save()
        res.status(201).json(savedFaculty);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

// app.get("/api/faculty",async(req,res)=>{
//     try{
//             const faculties=await Faculty.find();
//             res.json(faculties);
//         }catch(error){
//             res.status(500).json({error:error.message})
//         }
// })
app.get('/api/faculty',async(req,res)=>{
    try{
        const {n,page=1,limit=5}=req.query;
        let filter={};
        if(n){
            filter.name={$regex:n,$options:"i"};
        }
        const skip=(page-1)*limit;
        const data=await Faculty.find(filter)
        .skip(skip)
        .limit(parseInt(limit));
        const total=await Faculty.countDocuments(filter);
        res.json({
            totalRecords:total,
            page:Number(page),
            limit:Number(limit),
            data
        });
    }catch(error){
        res.status(500).json({error:error.message});
    }
})
app.get("/api/faculty/:id",async(req,res)=>{
    try{
        const faculty=await Faculty.findById(req.params.id);
        if(!faculty) return res.status(404).send("Faculty not found")
        res.json(faculty);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.put("/api/faculty/:id",async(req,res)=>{
    try{
        const updatedfaculty=await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updatedfaculty) return res.status(404).send("Faculty not found")
            res.json(updatedfaculty)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/api/faculty/:id",async (req,res)=>{
    try{
        const result=await Faculty.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("Faculty not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})

app.listen(3000, () => {
    console.log("server start");
});


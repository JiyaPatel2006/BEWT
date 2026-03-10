const express=require('express');
const Faculty=require('./faculty');
const app=express();

//Create
app.post("/",async(req,res)=>{
    try{
        const faculty=new Faculty(req.body)
        const savedFaculty = await faculty.save()
        res.status(201).json(savedFaculty);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
// app.get("/",async(req,res)=>{
//     try{
//         const faculty=await Faculty.find();
//         res.json(faculty);
//     }catch(error){
//         res.status(500).json({error:error.message})
//     }
// })


app.get("/:id",async(req,res)=>{
    try{
        const faculty=await Faculty.findById(req.params.id);
        if(!faculty) return res.status(404).send("Faculty not found")
        res.json(faculty);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
app.put("/:id",async(req,res)=>{
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

app.delete("/:id",async (req,res)=>{
    try{
        const result=await Faculty.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("Faculty not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})
//set page limit and search operation on get method
//pass url in api/faculty/?n=lion for search
//pass url in api/faculty/?page=1&limit=2 then give one page with 2 record 
app.get('/',async(req,res)=>{
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
module.exports=app;
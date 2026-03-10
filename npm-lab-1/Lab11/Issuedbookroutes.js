const Issuedbook=require('./Issuedbookschema')
const express=require('express');
const app=express();

app.post("/",async(req,res)=>{
    try{
        const issuedbook=new Issuedbook(req.body)
        const savedIssuedbook = await issuedbook.save()
        res.status(201).json(savedIssuedbook);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});
app.get("/",async(req,res)=>{
    try{
        const issuedbook=await Issuedbook.find();
        res.json(user);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const issuedbook=await Issuedbook.findById(req.params.id);
        if(!issuedbook) return res.status(404).send("user not found")
        res.json(issuedbook);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
app.put("/:id",async(req,res)=>{
    try{
        const updatedbook=await Issuedbook.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updatedbook) return res.status(404).send("user not found")
            res.json(updatedbook)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/:id",async (req,res)=>{
    try{
        const result=await Issuedbook.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("User not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})
module.exports=app;
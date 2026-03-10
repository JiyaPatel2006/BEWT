const express=require('express');
const User=require('./Userschema')
const app=express();

app.post("/",async(req,res)=>{
    try{
        const user=new User(req.body)
        const savedUser = await user.save()
        res.status(201).json(savedUser);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

app.get("/",async(req,res)=>{
    try{
        const user=await User.find();
        res.json(user);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user) return res.status(404).send("user not found")
        res.json(user);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
app.put("/:id",async(req,res)=>{
    try{
        const updateduser=await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updateduser) return res.status(404).send("user not found")
            res.json(updateduser)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/:id",async (req,res)=>{
    try{
        const result=await User.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("User not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})



module.exports=app;






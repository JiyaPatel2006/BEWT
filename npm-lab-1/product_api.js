const express=require('express');
const Product=require('./faculty');
const app=express();

//Create
app.post("/",async(req,res)=>{
    try{
        const product=new Product(req.body)
        const savedProduct = await product.save()
        res.status(201).json(savedProduct);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

//Read All
app.get("/",async(req,res)=>{
    try{
        const product=await Product.find();
        res.json(product);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(!product) return res.status(404).send("Product not found")
        res.json(product);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
app.put("/:id",async(req,res)=>{
    try{
        const updatedproduct=await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updatedproduct) return res.status(404).send("Product not found")
            res.json(updatedproduct)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/:id",async (req,res)=>{
    try{
        const result=await Faculty.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("Product not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})

module.exports=app;
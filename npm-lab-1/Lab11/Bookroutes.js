const express=require('express');
const Book=require('./Bookschema')
const app=express();

app.post("/",async(req,res)=>{
    try{
        const book=new Book(req.body)
        const savedBook = await book.save()
        res.status(201).json(savedBook);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});
app.get("/",async(req,res)=>{
    try{
        const book=await Book.find();
        res.json(book);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        if(!book) return res.status(404).send("book not found")
        res.json(book);
    }catch(error){
        res.status(500).json({error:error.message})
    }
})
app.put("/:id",async(req,res)=>{
    try{
        const updatedbook=await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        if(!updatedbook) return res.status(404).send("book not found")
            res.json(updatedbook)
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/:id",async (req,res)=>{
    try{
        const result=await Book.findByIdAndDelete(req.params.id)
        if(!result) return res.status(404).send("Book not found")
            res.status(404).send();
    }catch(error){
         res.status(500).json({error:error.message})
    }
})

module.exports=app;
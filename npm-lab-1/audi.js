const express=require('express')
const app=express();

app.get("/login",(req,res)=>{
    res.send("hello world from express js")
})

app.get("/logout",(req,res)=>{
    res.send("logout sucessfully")
})

app.listen(3000,()=>{

    console.log("server started")
})

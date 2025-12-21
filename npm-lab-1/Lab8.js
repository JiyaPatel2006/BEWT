const express =require('express')
const fs=require('fs')
const app=express()
//1. Create a hello world webapp using ExpressJS. (A) 
// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

// app.listen(3000,()=>{
//     console.log("server start")
// })

//2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)
// app.get("/home",(req,res)=>{
//     res.send("Home page")
// })

// app.get("/about",(req,res)=>{
//     res.send("About page")
// })

// app.get("/contact",(req,res)=>{
//     res.send("Contact page")
// })

// app.get("/setting",(req,res)=>{
//     res.send("Setting page")
// })

// app.get("/profile",(req,res)=>{
//     res.send("Profile page")
// })


// app.listen(3000,()=>{
//     console.log("server start")
// })

//3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using express (C )
// app.get("/",(req,res)=>{
//     res.send("Default page")
// })

// app.get("/about",(req,res)=>{
//     fs.readFile('about.txt','utf8',(err,data)=>{
//             if(err){
//                 console.log("Error");
//             }
//             else{
//                 res.send(data)
//             }
//           })
// })

// app.get("/contact",(req,res)=>{
//     fs.readFile('contact.txt','utf8',(err,data)=>{
//             if(err){
//                 console.log("Error");
//             }
//             else{
//                 res.send(data)
//             }
//           })
// })

// app.get("/output",(req,res)=>{
//     fs.readFile('output.txt','utf8',(err,data)=>{
//             if(err){
//                 console.log("Error");
//             }
//             else{
//                 res.send(data)
//             }
//           })
// })

// app.listen(3000,()=>{
//     console.log("server start")
// })



//extra

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello</h1>")
// })

// app.listen(3000,()=>{
//     console.log("server start")
// })

//pass data in json format


// app.get("/",(req,res)=>{
//     res.send({
//         "name":"jiya",
//         "roll no":"424"
//     })
// })



// app.listen(3000,()=>{
//     console.log("server start")
// })

//
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hii")
})
app.post('/login',(req,res)=>{
    const {name,email}=req.body
    console.log(name,email)
    res.json(`welcome ${name} emai ${email}`)
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params.id)
    res.send(`user ${req.params.id}`)
})
app.listen(4000,()=>{
    console.log("server start")
})


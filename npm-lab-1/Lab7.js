// 1. Create a hello world webapp using “http” core module in NodeJS. (A) 
const http=require('http')
// http.createServer((req,res)=>{
//     res.end("Hello World")
// }).listen(3000,()=>{
//     console.log("server started on 3000")
// })

// 2. Create a webapp with 5 pages like about, contact etc.. using “http” core module in NodeJS. (B) 
// const server=http.createServer((req,res)=>{
//     res.write("hello")
//     if(req.url=='/home'){
//         res.write("Home page")
//     }
//     else if(req.url=='/about'){
//         res.write("About page")
//     }
//     else if(req.url=='/contact'){
//         res.write("Contact page")
//     }
//     else if(req.url=='/profile'){
//         res.write("Profile page")
//     }
//     else if(req.url=='/setting'){
//         res.write("setting page")
//     }
//     else{
//         res.write("Default page")
//     }
//     res.end()
// }).listen(3000,()=>{
//     console.log("server start")
// })

// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module (C)
const fs=require('fs')
// fs.writeFile('About.txt',"this is about file",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
// fs.writeFile('Contact.txt',"this is contact file",(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
const server=http.createServer((req,res)=>{
    if(req.url==='/contact'){
       fs.readFile('contact.txt','utf8',(err,data)=>{
        if(err){
            console.log("Error");
        }
        else{
            res.write(data);
            res.end()
        }
      })
    }
   else if(req.url==='/About'){
       fs.readFile('about.txt','utf8',(err,data)=>{
        if(err){
            console.log("Error");
        }
        else{
            res.write(data);
            res.end()
        }
      })
    }
    else{
        res.write("Default")
        res.end()
    }
})
server.listen(3010,()=>{
    console.log("server start")
})
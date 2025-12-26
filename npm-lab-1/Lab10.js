//if next() is not called ->request stop
//midlewere is use to:
//log request, parse request body,
//3 type 
//built-in midlewere
//example: app.use(express.json())
//custom 
//example: const express=require('express')
//const app=express()
//app.use((req,res,next)=>{
    //    c.l("middle excute")})
    // next()
    //});
//route level
//function mi(req,res,next){
//      if(req.query.admin==='true'){
//          next();
//      }else{
    //      res.send("access")}
    //}
    //


// Setup MongoDB and middleware in ExpressJS
// 1. Demonstrate the use of middleware in Express. (A) 
const express=require('express')
const app=express()
const url=require('url')

// function sayhello(req,res,next){
//     console.log("Hello")
//     console.log("Path:",req.url)
//     next();
// }

// function sayhello(req,res,next){
//      if(req.query.home==='true'){
//          next();
//      }else{
//          res.send("not give access")}
//     }

// app.use(sayhello);
// app.get('/',sayhello,(req,res,next)=>{
//     res.send("Welcome")
// })

// app.get('/home',sayhello,(req,res,next)=>{
//     res.send("Welcome")
// })

// app.get('/home',(req,res,next)=>{
//     res.send("Welcome")
// })
// app.get('/',(req,res,next)=>{
//     res.send("Welcome")
// })

// app.listen(3000,()=>{
//     console.log("server started")
// })

// 2. Demonstrate the use of static middleware in Express. (A)
app.use(express.static(__dirname))
app.get('/',(req,res)=>{
    res.send("static file access using /output.txt")
})
app.listen(3000,()=>{
    console.log("server started")
})
// 3. Install MongoDB and MongoDBCompass (A)

// 4. Setup documents in MongoDB. (A)    



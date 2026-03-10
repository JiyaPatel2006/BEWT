const express=require('express')
const { getAllUsers, getUserById, insertUser, updateUser, deleteUser, checkLogin } = require('../services/user.service')
const { authMiddleware } = require('../middleware/auth.middleware')

const routeUser=express.Router()
routeUser.use(authMiddleware)

//post
routeUser.post("/", async(req,res)=>{
    const data=await insertUser(req.body)
    res.send(data)
})


//get all
routeUser.get("/",async (req,res)=>{
    const data=await getAllUsers();
    res.send(data)
})

// routeUser.get("/",async (req,res)=>{
//     const data=await getAllUsers(req.body);
//     res.send(data)
// })

//get by id
routeUser.get("/:id",async (req,res)=>{
    const data=await getUserById(req.params.id)
    res.send(data)
})

//edit
routeUser.patch("/:id",async (req,res)=>{
    const data=await updateUser(req.params.id,req.body)
    res.send(data)
})

//delete
routeUser.delete("/:id",async(req,res)=>{
    const data=await deleteUser(req.params.id)
    res.send(data)
})

//login
routeUser.post("/login",async(req,res)=>{
    const data=await checkLogin(req.body)
    res.send(data)
})

module.exports=routeUser
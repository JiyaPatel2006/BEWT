const express=require('express')
const { insertRating, getAllRating, getRatingByID, updateRating, deletRating } = require('../services/rating.service')
const routeMovie = require('./movies.route')

const routeRating=express.Router()

//post
routeRating.post("/",async(req,res)=>{
    const data=await insertRating(req.body)
    res.send(data)
})

//get all
routeRating.get("/",async(req,res)=>{
    const data=await getAllRating()
    res.send(data)
})

//get by id
routeRating.get("/:id",async(req,res)=>{
    const data=await getRatingByID(req.params.id)
    res.send(data)
})

//update
routeRating.patch("/:id",async(req,res)=>{
    const data= await updateRating(req.params.id,req.body)
    res.send(data)
})

//delete
routeRating.delete("/:id",async(req,res)=>{
    const data=await deletRating(req.params.id,req.body)
    res.send(data)
})

module.exports=routeRating
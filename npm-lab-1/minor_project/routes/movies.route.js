const express=require('express')
const { getAllMovie, getMoviById, insertMovie, updateMovie, deleteMovie } = require('../services/movie.service')

const routeMovie=express.Router()

//post insert
routeMovie.post("/",async(req,res)=>{
    const data=await insertMovie(req.body)
    res.send(data)
})

//get all
routeMovie.get("/",async(req,res)=>{
    const data=await getAllMovie()
    res.send(data)
})

//get by id
routeMovie.get("/:id",async(req,res)=>{
    const data=await getMoviById(req.params.id)
    res.send(data)
})

//update
routeMovie.patch("/:id",async(req,res)=>{
    const data=await updateMovie(req.params.id,req.body)
    res.send(data)
})

//delete
routeMovie.delete("/:id",async(req,res)=>{
    const data=await deleteMovie(req.params.id)
    res.send(data)
})

module.exports=routeMovie
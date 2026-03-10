const express=require("express");
const routeUser = require("./routes/user.route");
const routeMovies=require('./routes/movies.route')
const routeRatings=require('./routes/rating.route')
const app=express()

app.use(express.json())
app.use("/users",routeUser)
app.use("/movies",routeMovies)
app.use("/ratings",routeRatings)


app.listen(3000,()=>{
    console.log("server started at 3000");
});
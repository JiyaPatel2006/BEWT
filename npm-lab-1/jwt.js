const express=require('express')
const jwt=require('jsonwebtoken')
const app=express()
app.use(express.json())

const SECRECT_KEY='mysecretkey'

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    if(username==="jiya" && password==="123"){
        const token=jwt.sign(
            {username:username},
            SECRECT_KEY,
            {expiresIn:"1h"}
        );
        res.json({
            message:"Login successful",
            tocken:token
        });
    }else{
        res.status(401).json({message:"invalid"})
    }
})

function verifyToken(req,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(403).json({message:"Token required"});
    }
    const token=authHeader.split(" ")[1];
    jwt.verify(token,SECRECT_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).json({message:"Invalid token"})
        }
        req.user=decoded;
        next();
    });
}

app.get("/dashboard",verifyToken,(req,res)=>{
    res.json({
        message:"Welcome to dashboard",
        user:req.user
    });
});

app.listen(3000, () => {
    console.log("server start");
});
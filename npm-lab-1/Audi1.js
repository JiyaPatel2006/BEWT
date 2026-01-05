import bodyparser from 'body-parser'

const routestudent=Route();
const data=["jiya","patel","darshan","rajkot"]
routestudent.use(bodyparser.json())
routestudent.get("/",(req,res)=>{
    res.send(data);
});


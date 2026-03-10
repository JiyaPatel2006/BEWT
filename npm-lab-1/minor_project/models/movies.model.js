const db=require("../db/mysql");
const { deleteById } = require("./users.model");

async function insert(formData){
    try{
        const [data,fields]=await db.query(`INSERT INTO movies (MovieID, MovieName) VALUES (NULL, '${formData.MovieName}')`);
        return data
    }catch(err){
        console.log(err)
        return false;
    }
}

async function getAll(){
    try{
        const [data,fields]=await db.query("SELECT * FROM movies");
        return data
    }catch(err){
        console.log(err)
        return false;
    }
}

async function getByID(id){
    try{
        const[data,fields]=await db.query("SELECT * FROM movies where MovieID="+id)
        return data;
    }catch(err){
        console.log(err)
        return false;
    }
}

async function getByMovieName(mn) {
    try{
        const[data,fields]=await db.query(`SELECT * FROM movies where MovieName="${mn}"`)
        return data
    }catch(err){
         console.log(err)
        return false;
    }
}

async function update(id,formData) {
    try{
        const [data,fields]=await db.query(`UPDATE movies SET MovieName='${formData.MovieName}' WHERE MovieID=${id};`)
        return data
    }catch(err){
        console.log(err)
        return false;
    } 
}

async function deleteMovieById(id,formData) {
    try{
        const[data,fields]=await db.query(`DELETE FROM movies WHERE MovieID=${id};`)
        return data
    }catch(err){
        console.log(err)
        return false;
    }
}



module.exports={getAll,getByID,getByMovieName,update,insert,deleteMovieById}
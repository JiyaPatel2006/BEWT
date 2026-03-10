const db=require("../db/mysql")


async function insert(formData){
     try{
        const [data,fields]=await db.query(`INSERT INTO movie_rating (RatingID, MovieID, UserID,RatingStar,RatingComment) VALUES (NULL, '${formData.MovieID}','${formData.UserID}','${formData.RatingStar}','${formData.RatingComment}')`);
        return data
    }catch(err){
        console.log(err)
        return false;
    }
}

async function getAll(){
    try{
        const [data,fields]=await db.query("SELECT * FROM movie_rating");
        return data
    }catch(err){
        console.log(err)
        return false;
    }
}

async function getByID(id){
    try{
        const [data,fields]=await db.query("SELECT * FROM movie_rating where RatingID="+id);
        return data[0]
    }catch(err){
         console.log(err)
        return false;
    }
}


async function update(id,formData){
     try{
        const [data,fields]=await db.query(`UPDATE movie_rating SET RatingID = '${formData.RatingID}', MovieID = '${formData.MovieID}, RatingStar='${formData.RatingStar}',RatingComment='${formData.RatingComment}' WHERE RatingID = ${id};`);
        return data 
    }catch(err){
         console.log(err)
        return false;
    }
}

async function deleteRatingById(id,formData){
     try{
        const [data,fields]=await db.query(`DELETE FROM movie_rating WHERE RatingID = ${id};`);
        return data 
    }catch(err){
         console.log(err)
        return false;
    }
}

module.exports={getAll,getByID,insert,update,deleteRatingById}
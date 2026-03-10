const {getAll,getByID,insert, deleteMovieById, update}=require("../models/movies.model")
// var jwt=require('jsonwebtoken')

async function insertMovie(formData){
    const data=await insert(formData)
    if(data){
        return{
        error:false,
        data,
        message:"Movie inserted Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in inserting Movie"
        }
    }
}

async function getAllMovie() {
    const data=await getAll()
    if(data){
        return{
            error:false,
            data,
            message:"Movie Fetched Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in fetching Movie"
        }
    }   
}

async function getMoviById(id){
    const data=await getByID(id)
    if(data){
          return{
            error:false,
            data,
            message:"Movie Fetched Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in fetching Movie"
        }
    }   
    }

    async function updateMovie(id,formData){
        const data=await update(id,formData)
         if(data){
        return{
        error:false,
        data,
        message:"Movie updated Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in updating Movie"
        }
    }
    }

    async function deleteMovie(id){
        const data=await deleteMovieById(id)
        if(data){
        return{
        error:false,
        data,
        message:"Movie deleted Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in deleting Movie"
        }
    }
    }



    module.exports={insertMovie,getAllMovie,getMoviById,updateMovie,deleteMovie}
const { insert,getAll, getByID, update, deleteRatingById } = require("../models/rating.model");


async function insertRating(formData){
    const data=await insert(formData)
    if(data){
        return{
            error:false,
            data,
            message:"Rating inserted Successfully"
        }
    }
    else{
        return{
        error:true,
        message:"Error occured in inserting rating"
        }
    }
}

async function getAllRating(){
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

async function getRatingByID(id){
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

async function updateRating(id,formData){
    const data=await update(id)
      if(data){
        return{
            error:false,
            data,
            message:"Rating Fetched Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in fetching Rating"
        }
    }  
}

async function deletRating(id){
    const data=await deleteRatingById(id)
      if(data){
        return{
            error:false,
            data,
            message:"Rating deleted Successfully"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in deleting rating"
        }
    }  
}

module.exports={insertRating,getAllRating,getRatingByID,updateRating,deletRating}
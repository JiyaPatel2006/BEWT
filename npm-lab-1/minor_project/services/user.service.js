const { getAll, insert, getByID, update, deleteById, getByUserName } = require("../models/users.model");
var jwt=require('jsonwebtoken')

async function insertUser(formData){
     const data=await insert(formData)
    if(data){
        return{
        error:false,
        data,
        message:"User inserted Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in inserting user"
        }
    }
}

async function getAllUsers(){
    const data=await getAll()
    if(data){
        return{
        error:false,
        data,
        message:"User fetched Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in fetching user"
        }
    }
}

async function getUserById(id){
     const data=await getByID(id)
    if(data){
        return{
        error:false,
        data,
        message:"User fetched Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in fetching user"
        }
    }
}

async function updateUser(id,formData){
   const data=await update(id,formData)
    if(data){
        return{
        error:false,
        data,
        message:"User updated Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in updating user"
        }
    }
}

async function deleteUser(id){
     const data=await deleteById(id)
    if(data){
        return{
        error:false,
        data,
        message:"User deleted Successful"
        }
    }
    else{
        return{
            error:true,
            message:"Error occured in deleting user"
        }
    }
}

async function checkLogin(formData){
     const data=await getByUserName(formData.UserName)
     console.log(data)
    if(data){
        if(data[0].Password===formData.Password){
            var token=jwt.sign(data[0],'shhhhh')
    return{
        error:false,
        data:token,
        message:"User fetched Successful"
        }
        }
         return{
            error:true,
            data,
            message:"UserName or Password does not match"
        }
    }
    else{
        return{
            error:true,
            message:"UserName/Password does not match"
        }
    }
}



module.exports={getAllUsers,getUserById,insertUser,updateUser,deleteUser,checkLogin}






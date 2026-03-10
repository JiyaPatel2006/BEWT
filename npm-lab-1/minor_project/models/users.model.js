const db=require("../db/mysql")


async function insert(formData){
     try{
        const [data,fields]=await db.query(`INSERT INTO users (UserID, UserName, Password) VALUES (NULL, '${formData.UserName}', '${formData.Password}')`);
        return data
    }catch(err){
        console.log(err)
        return false;
    }
}

async function getAll(){
    try{
        const [data,fields]=await db.query("SELECT * FROM users");
        return data
    }catch(err){
        // console.log(err)
        return false;
    }
}

async function getByID(id){
    try{
        const [data,fields]=await db.query("SELECT * FROM users where UserID="+id);
        return data[0]
    }catch(err){
         console.log(err)
        return false;
    }
}

async function getByUserName(un){
    try{
        const [data,fields]=await db.query(`SELECT * FROM users where UserName="${un}"`);
        return data
    }catch(err){
         console.log(err)
        return false;
    }
}

async function update(id,formData){
     try{
        const [data,fields]=await db.query(`UPDATE users SET UserName = '${formData.UserName}', Password = '${formData.Password}' WHERE UserID = ${id};`);
        return data 
    }catch(err){
         console.log(err)
        return false;
    }
}

async function deleteById(id,formData){
     try{
        const [data,fields]=await db.query(`DELETE FROM users WHERE UserID = ${id};`);
        return data 
    }catch(err){
         console.log(err)
        return false;
    }
}

module.exports={getAll,getByID,insert,update,deleteById,getByUserName}
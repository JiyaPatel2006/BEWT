const mongoose = require("mongoose");

const issuedBookSchema = new mongoose.Schema({
    issueDate:{
        type:Date,
        default:Date.now
    },
    dueDate:{
        type:Date,
        required:true
    },
    returnDate:{
        type:Date
    }
    
});
module.exports=mongoose.model("Issuedbook",issuedBookSchema)

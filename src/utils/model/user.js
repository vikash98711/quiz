const { default: mongoose } = require("mongoose");

const usermodel = new mongoose.Schema({
 
    email: {
        type : String,
        unique : true,
        required : true
    },
    result : {
        type : Array
    }
   
})    

export const User = mongoose.models.user || mongoose.model("user", usermodel)

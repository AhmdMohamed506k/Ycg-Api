


import mongoose,{ Schema ,model} from "mongoose";

const userSchema = new Schema({
    firstName: {
       type:String,
       required:true
    },
    lastName: {
        type:String,
        required:true
      
    },
    userName: {                              
        type:String,
        required:true,
        unique:true


    },
    Email: {
        type: String,
        unique: true,
        required:true  
       
      
    },
    password: {
        type:String,
        required:true
       
    },
    mobileNumber: {
        type:String,
        required:true,
        unique:true
  

    },
    recoveryEmail:{
        type:Boolean,
        default:false

    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    status: {
        type: String,
        enum: ["online", "offline"],
        default:"offline"
        
    } 
   

})

const userModel = model("user", userSchema);

export default userModel
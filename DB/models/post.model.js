
import { types } from "joi";
import mongoose, { Schema ,model} from "mongoose";

const PostsSchema = new Schema({
    PostTitle: {                              
        type: String,
        required:true

    },
    PostDescription: {                              
        type: String,
        required:true

    },
    seniorityLevel: {
        type: String,
        enum:["Junior","Mid-Level","Senior","Team-Lead","CTO"],
      

    },
    jobFeild: {
        type: String,
        enum: ["Accounting, Finance & Banking","Engineering", "Designers","Customer Service & Call Center","Drivers & Delivery","Education","Tourism, Travel & Hospitality","IT - Telecom","Medical, Healthcare, & Nursing"],
        required:true
    },
    Jobaddress : {                              
        type: String,
        required:true

    },
    ownerMobile : {                              
        type: String,
        required:true

    },
    ownerName : {                              
        type: String,
        required:true

    },
    Skills : {                              
        type: Array,
        required:true

    },
    PostOwnerId:{
        type: String,
        required:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true
  
       
    }
   

   


})

const PostsModel = model("Posts", PostsSchema);

export default PostsModel;
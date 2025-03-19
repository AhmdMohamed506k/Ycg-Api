import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../service/sendMail.js";


   


export const getAllUsers = async (req, res, next) =>{
    try {
    
        const user = await userModel.find()
        res.status(200).json(user)

    
    }
    catch (err) {
       console.log("catch Error",err);
   }

}
export const signUp = async (req, res, next) =>{
    

    const { firstName, lastName, userName, Email, password, mobileNumber } = req.body;
    
    const userExist = await userModel.findOne({ Email });
    if (userExist) {
        return res.status(350).json({msg:"Email already Exist"});
    }

    const userNameExist = await userModel.findOne({ userName });
    if (userNameExist) {
       return  res.status(350).json({msg:"Sorry userName already Exist"});
    }
    const numberExist = await userModel.findOne({ mobileNumber });
    if (numberExist) {
        return res.status(350).json({msg:"Sorry phone number already Exist"});
    }

    const hash = bcrypt.hashSync(password, 8);



    const token = jwt.sign({ Email }, "test")
    const Link = `http://localhost:3000/user/confirmEmail/${token}`;
    await sendEmail(Email, Link,`<a href=${Link}>click here</a>`)
    
   
    const user = await userModel.create({ firstName, lastName, userName, Email, password: hash , mobileNumber });
    

    res.status(200).json({msg:"done",user})

  


}
export const confirmEmail = async (req, res, next) => {
    const { token } = req.params;
   

    const decoded = jwt.verify(token, "test");
 
    if (!decoded) {
      return  res.status(400).json({ msg: "invaild payload" });
    }
    const user = await userModel.findOneAndUpdate({ Email: decoded.Email, recoveryEmail: "0" }, { recoveryEmail: "1" }, { new: true });
    if (!user) {
     return   res.status(403).json({ msg: "already confirmed" });
 
    }
    res.status(200).json({ msg: "done" });

}
export const signIn = async (req, res, next) =>{   //Login
    try {
    
        
        const {  Email, password } = req.body;
    
        const user = await userModel.findOne({ Email });
    
        if (!user || ! bcrypt.compareSync(password , user.password)) {
            res.status(350).json("Sorry wrong Email or Password");
        }
        const token = jwt.sign({ Email,firstName:user.firstName ,lastName:user.lastName ,userName:user.userName ,Email:user.Email, mobileNumber:user.mobileNumber }, "test")
       
  
        await userModel.findOneAndUpdate({ status :"offline"},{status:"online"}, {new:true})
        res.status(200).json({msg:"done",token})
      
      
    }
    catch (err) {
       console.log("catch Error",err);
   }

}


// ===============================


export const updateAccount = async (req, res, next) =>{
    try {
       
     
        const { firstName, lastName, userName ,mobileNumber} = req.body;
       
        

        if (!req.user) { 
            res.status(400).json({msg:"sorry only owner can update  account"});
        }
        const usernameExist= await userModel.findOne({userName:req.user.userName});
        if (usernameExist) { 
            res.status(350).json({msg:"sorry userName already exist"});
        }
        const phoneExist= await userModel.findOne({mobileNumber:req.user.mobileNumber});
        if (phoneExist) { 
            res.status(350).json({msg:"sorry phone number already exist"});
        }

        const user = await userModel.findOneAndUpdate({_id:req.user._id} ,{ firstName, lastName, userName, mobileNumber }, { new: true });
      
        res.status(200).json({ msg: "successfully updated :)" });

      
        
        
      
      
    }
    catch (err) {
       console.log("catch Error",err);
   }

}
export const updataPassword = async (req, res, next) =>{
    try {
       
         

        const {Email, password } = req.body;

      
        
        const userExist = await userModel.findOne({Email})
        if (!userExist) {
         
          res.status(204).json({msg:"user not found"})
        
          
        }

     
        const hash = bcrypt.hashSync(password,8)
        const updatePass = await userModel.findOneAndUpdate(  {Email:req.user.Email}  , {password :hash} ,{new:true});
     

       res.status(200).json({msg:"done" ,updatePass})
    
    }
    catch (err) {
       console.log("catch Error",err);
   }

}










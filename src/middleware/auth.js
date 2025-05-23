
import jwt, { decode } from "jsonwebtoken";
import userModel from "../../DB/models/user.model.js";

export const auth = async (req, res, next) => {
    const { token } = req.headers;
  
    if (!token) {
      return  res.status(400).json({ msg: "Sorry token not Exist" });
    }


    const decoded = jwt.verify(token, 'T');
    
    
    
     
   
    const user = await userModel.findOne({ Email: decoded.Email, status:"online"});
  
   
     
    if (!user ) {
      return res.status(400).json({ msg: "you are not authorised" });
    }
    req.user = user
    next()





}

import jwt, { decode } from "jsonwebtoken";
import userModel from "../../DB/models/user.model.js";

export const auth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
      return  res.status(400).json({ msg: "Sorry token not Exist" });
    }


    const decoded = jwt.verify(token, 'test');
    
     
   
    const user = await userModel.findOne({ Email: decoded.Email, status:"online"});
  
   
     
    if (!user ) {
      return res.status(400).json({ msg: "you are not authorised" });
    }
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
    res.header('Access-Control-Allow-Methods',"GET,POST,PUT,DELETE,OPTIONS")
    res.header('Access-Control-Allow-Credentails', true)
    
    req.user = user
    next()





}
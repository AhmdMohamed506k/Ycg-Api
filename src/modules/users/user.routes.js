import { Router } from "express";
import * as us from "./user.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();



router.get("/getAllUsers",us.getAllUsers);

//================================================


router.post("/SignUp", us.signUp);
router.post("/signIn", us.signIn);
router.get("/user/confirmEmail/:token", us.confirmEmail);


//================================================


router.put("/updateAccount", auth , us.updateAccount);
router.put("/updataPassword", auth, us.updataPassword);








export default router;
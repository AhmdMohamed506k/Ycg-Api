import { Router } from "express";
import * as p from "./post.controller.js"
import { auth } from "../../middleware/auth.js";


const router = Router();


router.get("/getPosts",p.getPosts);
router.post("/addPosts",auth, p.addpost);
router.put("/updatePost",auth , p.updatePost);
router.delete("/deletPost",auth , p.deletPost);




export default router;
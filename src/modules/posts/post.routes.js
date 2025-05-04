import { Router } from "express";
import * as p from "./post.controller.js"
import { auth } from "../../middleware/auth.js";
import cors from "cors"
import { allowCors } from "../../middleware/cors.js";






const router = Router();


router.get("/getPosts",p.getPosts);
router.get("/getPostsByJobFeild/:jobFeild",p.GetPostsByJobFeild);
router.get("/getPostsbyId/:id",p.GetPostsById);
router.post("/addPosts",auth,allowCors, p.addpost);
router.put("/updatePost",auth , p.updatePost);
router.delete("/deletPost",auth ,  p.deletPost);




export default router;
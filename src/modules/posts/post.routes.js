import { Router } from "express";
import * as p from "./post.controller.js"
import { auth } from "../../middleware/auth.js";
import cors from "cors"






const router = Router();


router.get("/getPosts",p.getPosts);
router.get("/getPostsByJobFeild/:jobFeild",p.GetPostsByJobFeild);
router.get("/getPostsbyId/:id",p.GetPostsById);
router.post("/addPosts",auth, cors(), p.addpost);
router.put("/updatePost",auth ,cors(), p.updatePost);
router.delete("/deletPost",auth , cors(), p.deletPost);




export default router;
import express from "express";
import { postController } from "./post.controller";
const router = express.Router();

router.post("/create-post", postController.insertPost);
router.get("/get-all-post", postController.getAllPost);

export const postRoutes = router;

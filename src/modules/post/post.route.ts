import express from "express";
import { postController } from "./post.controller";
const router = express.Router();

router.post("/create-post", postController.insertPost);

export const postRoutes = router;

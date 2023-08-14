import express from "express";
import { categoryController } from "./category.controller";
const router = express.Router();

router.post("/create-category", categoryController.insertCategory);
// router.post("/get-all-category", categoryController.insertCategory);

export const categoryRoutes = router;

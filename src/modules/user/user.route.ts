import express from "express";
import { insertUser } from "./user.controller";

const router = express.Router();

router.post("/create-user", insertUser);

export const userRoutes = router;

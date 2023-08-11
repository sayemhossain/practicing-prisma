import express from "express";
import { insertOrUpdateProfile, insertUser } from "./user.controller";

const router = express.Router();

router.post("/create-user", insertUser);
router.post("/create-profile", insertOrUpdateProfile);

export const userRoutes = router;

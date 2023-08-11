import express from "express";
import {
  getSingleUser,
  getUsers,
  insertOrUpdateProfile,
  insertUser,
} from "./user.controller";

const router = express.Router();

router.post("/create-user", insertUser);
router.post("/create-profile", insertOrUpdateProfile);
router.get("/:id", getSingleUser);
router.get("/", getUsers);

export const userRoutes = router;

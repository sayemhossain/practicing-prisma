import cors from "cors";
import express, { Application } from "express";
import { categoryRoutes } from "./modules/category/category.route";
import { postRoutes } from "./modules/post/post.route";
import { userRoutes } from "./modules/user/user.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/post", postRoutes);

export default app;

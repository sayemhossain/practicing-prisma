import { NextFunction, Request, Response } from "express";
import { postService } from "./post.service";

const insertPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await postService.insertPostIntoDB(req.body);

    res.send({
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllPost = async (req: Request, res: Response, next: NextFunction) => {
  const result = await postService.getAllPostToDB();

  res.status(200).send({
    success: true,
    message: "Posts found successfully",
    data: result,
  });
};

export const postController = { insertPost, getAllPost };
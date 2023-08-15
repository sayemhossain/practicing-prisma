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
  const options = req.query;
  try {
    const result = await postService.getAllPostToDB(options);

    res.status(200).send({
      success: true,
      message: "Posts found successfully",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    const result = await postService.updatePostToDB(id, data);

    res.status(200).send({
      success: true,
      message: "Posts updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);

    const result = await postService.deletePostToDB(id);

    res.status(200).send({
      success: true,
      message: "Posts deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const postController = {
  insertPost,
  getAllPost,
  updatePost,
  deletePost,
};

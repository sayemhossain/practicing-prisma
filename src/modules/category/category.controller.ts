import { NextFunction, Request, Response } from "express";
import { categoryService } from "./category.service";

const insertCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await categoryService.insertCategoryIntoDB(req.body);

    res.send({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export const categoryController = { insertCategory };

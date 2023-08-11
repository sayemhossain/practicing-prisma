import { NextFunction, Request, Response } from "express";
import { insertUserIntoDB } from "./user.service";

export const insertUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await insertUserIntoDB(req.body);

    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

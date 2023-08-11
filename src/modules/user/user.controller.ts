import { NextFunction, Request, Response } from "express";
import { insertOrUpdateProfileIntoDB, insertUserIntoDB } from "./user.service";

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

export const insertOrUpdateProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const result = await insertOrUpdateProfileIntoDB(req.body);

    res.send({
      success: true,
      message: "Profile created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

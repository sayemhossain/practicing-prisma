import { NextFunction, Request, Response } from "express";
import {
  getSingleUsersToDB,
  getUsersToDB,
  insertOrUpdateProfileIntoDB,
  insertUserIntoDB,
} from "./user.service";

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

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getUsersToDB();

    res.send({
      success: true,
      message: "Users find successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getSingleUsersToDB(parseInt(req.params.id));

    res.send({
      success: true,
      message: "User find successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

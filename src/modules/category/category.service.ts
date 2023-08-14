import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertCategoryIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};
export const categoryService = {
  insertCategoryIntoDB,
};

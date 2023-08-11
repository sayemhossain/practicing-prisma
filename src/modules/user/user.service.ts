import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const insertUserIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

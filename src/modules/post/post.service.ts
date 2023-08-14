import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertPostIntoDB = async (data: Post) => {
  const result = await prisma.post.create({
    data,
  });
  return result;
};
export const postService = { insertPostIntoDB };

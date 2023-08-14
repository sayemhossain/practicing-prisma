import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertPostIntoDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: { author: true, category: true },
  });
  return result;
};
const getAllPostToDB = async () => {
  const result = await prisma.post.findMany({
    include: { author: true, category: true },
  });
  return result;
};

export const postService = { insertPostIntoDB, getAllPostToDB };

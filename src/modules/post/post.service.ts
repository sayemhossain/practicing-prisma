import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertPostIntoDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: { author: true, category: true },
  });
  return result;
};

const getAllPostToDB = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit);
  const take = parseInt(limit);

  const result = await prisma.post.findMany({
    skip,
    take,
    include: { author: true, category: true },
    orderBy:
      sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: "desc" },
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    },
  });
  return result;
};

export const postService = { insertPostIntoDB, getAllPostToDB };

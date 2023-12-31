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
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;

  // Use transaction rollback here using prisma
  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
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

    // For counting total post
    const total = await tx.post.count();

    return { data: result, total };
  });
};

const updatePostToDB = async (
  id: number,
  payload: Partial<Post>
): Promise<Post | number> => {
  //   const result = await prisma.post.update({
  //     where: {
  //       id,
  //     },
  //     data: payload,
  //   });

  const result =
    await prisma.$executeRaw`UPDATE posts SET title=${payload.title} WHERE id=${id} `;
  return result;
};

const deletePostToDB = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};

const learnAggregateAndGropingToDB = async () => {
  //   const result = await prisma.post.aggregate({
  //     _avg: {
  //       authorId: true,
  //     },
  //     _sum: {
  //       id: true,
  //     },
  //     _max: {
  //       id: true,
  //     },
  //     _min: {
  //       id: true,
  //     },
  //     _count: {
  //       id: true,
  //     },
  //   });

  const result = await prisma.post.groupBy({
    by: ["authorId"],
    _count: {
      authorId: true,
    },
  });
  return result;
};

export const postService = {
  insertPostIntoDB,
  getAllPostToDB,
  updatePostToDB,
  deletePostToDB,
  learnAggregateAndGropingToDB,
};

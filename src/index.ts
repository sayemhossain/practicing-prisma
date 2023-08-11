import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const postUser = await prisma.user.create({
    data: {
      email: "shayem3@gmail.com",
      name: "Shayem Hossain 2",
    },
  });
  console.log(postUser);
  // const users = await prisma.user.findMany();
  // console.log(users);
}
main();

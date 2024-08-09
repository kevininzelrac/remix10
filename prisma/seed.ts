import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.category.create({
    data: {
      title: "default"
    }
  })
  await prisma.post.create({
    data: {
      title: "Hello World",
      content: "This is a test post",
      category: {
        connect: {
          title: "default",
        },
      }
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

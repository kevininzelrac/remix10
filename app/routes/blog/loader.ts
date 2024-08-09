import { unstable_defineLoader as defineLoader } from "@remix-run/node";
import resolvers from "~/resolvers";
import prisma from "~/services/prisma.server";

const loader = defineLoader(async () => {

  const posts = Promise.resolve(prisma.post.findMany({
    orderBy: { createdAt: "desc"}
  }));

  // const posts = prisma.post.findMany({
  //    orderBy: { createdAt: "desc"}
  // })
  // .then(async (post)=> {
  //  await new Promise((resolve) => setTimeout(resolve, 1000))
  // return post
  // })

  const categories = await resolvers.read.categories();

  return {posts, categories};
});

export default loader;

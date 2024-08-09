import prisma from "~/services/prisma.server";

const posts = async ()=> {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
          createdAt: "desc"
      }
    });
    return {data: posts, error: null};
  } catch (error) {
      if(error instanceof Error) return {data: null, error}
      return {data: null, error: new Error("Unknown Error")}
  }
}
export default posts
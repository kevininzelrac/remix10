import prisma from "~/services/prisma.server";

const categories = async ()=> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
          createdAt: "desc"
      }
    });
    return {data: categories, error: null};
  } catch (error) {
      if(error instanceof Error) return {data: null, error}
      return {data: null, error: new Error("Unknown Error")}
  }
}
export default categories
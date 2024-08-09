import prisma from "~/services/prisma.server"

const post = async (id: string)=> {
    try {
    const post = await prisma.post.delete({
            where: {id}
        });
        return {data: post, error: null}
        
    } catch (error) {
        if(error instanceof Error) return {data: null, error}
        return {data: null, error: new Error("Unknown Error")}
    }
}
export default post;

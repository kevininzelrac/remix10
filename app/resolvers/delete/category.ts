import prisma from "~/services/prisma.server"

const category = async (id: string)=> {
    try {
    const category = await prisma.category.delete({
            where: {id}
        });
        return {data: category, error: null}
        
    } catch (error) {
        if(error instanceof Error) return {data: null, error}
        return {data: null, error: new Error("Unknown Error")}
    }
}
export default category;

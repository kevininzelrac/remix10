import { Category } from "@prisma/client";
import prisma from "~/services/prisma.server";

const category = async (data: Category) => {
    try { 
        const category = await prisma.category.create({data})
        return {data: category, error: null};
    } catch (error) {
        if(error instanceof Error) return {data: null, error}
        return {data: null, error: new Error("Unknown Error")}
    }
}
export default category;
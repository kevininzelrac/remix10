import { Post } from "@prisma/client";
import prisma from "~/services/prisma.server";

const post = async (data: Post) => {
    try { 
        const post = await prisma.post.create({data})
        return {data: post, error: null};
    } catch (error) {
        if(error instanceof Error) return {data: null, error}
        return {data: null, error: new Error("Unknown Error")}
    }
}
export default post;
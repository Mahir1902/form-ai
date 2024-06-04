import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";



export async function getFormById(id: number) {

    const user = await currentUser()
    if (!user) {
        throw new Error("Unauthorized")
    }

    return await prisma.form.findUnique({
        where: {
            userId: user.id,
            id
        }
    })
}
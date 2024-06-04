import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"



export const getForms = async () => {
    const user = await currentUser()
    if (!user) {
        throw new Error("Unauthorized")
    }

    return await prisma.form.findMany({
        where: {
            userId: user.id
        },
        orderBy: {
            createdAt: "desc"
        }
    })
}
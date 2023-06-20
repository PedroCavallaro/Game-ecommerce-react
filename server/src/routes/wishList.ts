import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function wishListRoutes(app: FastifyInstance) {
    app.get("/wishList/:id", async (req)=>{
        const schema = z.object({
            id: z.string().uuid()
        })

        const { id } = schema.parse(req.params)

        const products = await prisma.wishList.findMany({
            where: {
                userId: id
            }
        })

        return products
    })
   
}
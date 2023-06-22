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
            },
            select:{
                product:{
                    select:{
                        id:true,
                        name:true,
                        value: true,
                        mediaProduct:{
                            select:{
                                fileName:true
                            }
                        }
                        
                    }
                }
            }
        })

        return products
    })
    app.get("/wishList/:userId/:productId", async (req)=>{
        const schema = z.object({
            userId: z.string().uuid(),
            productId: z.string().uuid(),
        })

        const { userId, productId } = schema.parse(req.params)

        const products = await prisma.wishList.findMany({
            where: {
                AND:[
                    {
                        userId,
                        productId
                    }
                ]
            },
            select:{
                product:{
                    select:{
                        id:true,
                        name:true,
                        value: true,
                        mediaProduct:{
                            select:{
                                fileName:true
                            }
                        }
                        
                    }
                }
            }
        })

        return products
    })
   app.post("/wishList", async (req)=>{
        const schema = z.object({
            userId: z.string().uuid(),
            productId: z.string().uuid(),
        })

        const {userId, productId} = schema.parse(req.body)
        
        const saveOnWishList = prisma.wishList.create({
            data:{
                userId,
                productId
            }
        })

        return saveOnWishList
   })
   app.delete("/wishList", async (req)=>{
    const schema = z.object({
        userId: z.string().uuid(),
        productId: z.string().uuid(),
    })

    const {userId, productId} = schema.parse(req.body)
    
    const deleteFromWishList = prisma.wishList.deleteMany({
        where:{
            AND:[
                {
                    productId,
                    userId
                }
            ]   
        }
    })


    return deleteFromWishList
    })
}
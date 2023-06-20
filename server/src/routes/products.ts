import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function productRoutes(app: FastifyInstance) {
    

    app.get("/products", async ()=>{
        const products = await prisma.product.findMany({
            include:{
                mediaProduct:{
                    select:{
                        fileName: true
                    }
                }
            }
        })

        return products.map((product)=>{
            return{
                id:product.id,
                name: product.name,
                desc: product.desc,
                value: product.value,
                coverUrl: product.mediaProduct.map((media)=>{
                    return media.fileName
                })
            }
        })
})
    app.get("/products/:id", async (req)=>{
        const params = z.object({
            id: z.string().uuid()
        })
        const { id } = params.parse(req.params)

        const products = await prisma.product.findMany({
            include:{
                mediaProduct:{
                    select:{
                        fileName: true
                    }
                }
            },
            where:{
                id,
                
            }
        })

        return products.map((product)=>{
            return{
                id:product.id,
                name: product.name,
                desc: product.desc,
                value: product.value,
                coverUrl: product.mediaProduct.map((media)=>{
                    return media.fileName
                })
            }
        })
    })
}

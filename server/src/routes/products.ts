import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

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
                name: product.name,
                desc: product.desc,
                value: product.value,
                coverUrl: product.mediaProduct.map((media)=>{
                    return media.fileName
                })
            }
        })
})}

import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function buyRoutes(app: FastifyInstance) {
    app.post("/buys", async (req, reply)=>{
        const schema = z.object({
           id: z.string().uuid(),
           products: z.array(z.string()),
           total: z.coerce.number()
        })
        const date = new Date()

        try{
            
            const {id, products, total} = schema.parse(req.body)
            
            if(products.length){
                const buy = await prisma.buys.create({
                    data: {
                        userId: id,
                        totalAmount: total,
                        date,
    
                    }
                })
                products.map( async (e)=>{
                    const buyItens = await prisma.buyItens.create({
                        data:{
                            buyId: buy.id,
                            prodId: e
                        }
                    })
                })
                return reply.status(201).send()

            }else{
                return reply.status(401).send()
            }

        }catch(erro){

            return reply.status(500).send()
        }   
    })
    app.get("/buys/:id",async (req) => {
        const schema = z.object({
            id: z.string().uuid()
        })
        const { id } = schema.parse(req.params)

        const info = await prisma.buys.findMany({
            where:{
                userId:id
            },
            select:{
                totalAmount:true,
                date:true,
                BuyItens:{
                    select:{
                        product:{
                            select:{
                                name: true
                            }
                        }
                    }
                }
            },
           orderBy:{
             date:"desc"
           }
        })

        return info

    })
}
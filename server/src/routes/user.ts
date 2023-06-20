import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function userRoutes(app: FastifyInstance) {

    app.get("/user/:name/:password", async (req)=>{
        const schema = z.object({
                name: z.string(), 
                password: z.string()   
            })
        const tokenBuilder = require('jwt-encode')
        const secret = "aojdqojdpiqjdpiq1-9rj19j01j2"
        const {name, password} = schema.parse(req.params)

        const user = await prisma.user.findMany({
           where:{
            name,

               AND:[
                    {
                        password,
                    }
               ]
                
           },
           select: {
                id:true,
                Buys: {
                    select:{
                        totalAmount: true,
                        date:true,
                        BuyItens: {
                            select:{
                                prodId: true,
                                product: {
                                    select:{
                                        name: true,
                                    }
                                }
                            },  
                        },    
                    },
                },
                
            }
        })
        const token = tokenBuilder(user, secret)
       
        return token
    })
    app.post("/user", async (req)=>{
        const schema = z.object({
            name: z.string(), 
            password: z.string()   
        })   
        const {name, password} = schema.parse(req.body)
        
        const userAlreadyRegistered = await prisma.user.findMany({
            where:{
                name
            }
        })
        // if(!userAlreadyRegistered){
        const user = await prisma.user.create({
            data:{
                name,
                password
            }
        })
        return user
        // }
    })
    
}

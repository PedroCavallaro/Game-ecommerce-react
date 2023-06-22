import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function genderRoutes(app:FastifyInstance) {
    app.get("/genders", async ()=>{
        const genders = await prisma.gender.findMany({
            select:{
                desc:true
            }
        })
        return genders
    })
    app.get("/genders&products",async () => {
        const productsAndGenders = await prisma.productAndGender.findMany({
            select:{
                product:{
                    select:{
                        id:true,
                        name:true,
                        desc:true,
                        value:true,
                        mediaProduct:{
                            select:{
                                fileName:true
                            }
                        }
                    }
                },
                gender:{
                    select:{
                        desc:true
                    }
                }
            }
        })

        return productsAndGenders
    })
}
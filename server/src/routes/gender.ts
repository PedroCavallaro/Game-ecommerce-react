import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function genderRoutes(app:FastifyInstance) {
    app.get("/genders", async ()=>{
        const genders = await prisma.gender.findMany({
            select: {
                desc: true
            }
        })
        return genders
    })
}
import fastify from "fastify";
import Cors from "@fastify/cors";
import { productRoutes } from "./routes/products";
import { userRoutes } from "./routes/user";

const app = fastify()

app.register(Cors, {
    origin: true    
})

app.listen({
    port: 3333
}).then(()=>{
    console.log("http//localhost:3333")
})

app.register(productRoutes)
app.register(userRoutes)
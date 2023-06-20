import fastify from "fastify";
import Cors from "@fastify/cors";
import { productRoutes } from "./routes/products";
import { userRoutes } from "./routes/user";
import { wishListRoutes } from "./routes/wishList";
import { genderRoutes } from "./routes/gender";

const app = fastify({
    logger: true
})

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
app.register(wishListRoutes)
app.register(genderRoutes)
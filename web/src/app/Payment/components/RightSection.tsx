import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { z } from "zod"


const schema  = z.object({
    name: z.string().min(4, {
        message:" Nome de usuário precisa ser maior"
    }),
    password: z.string().min(8,{
        message: "A senha deve ter no minimo 8 caracteres"
    })
})

type FormData = z.infer<typeof schema>



export default function RightSection() {
    const {
        handleSubmit,
        register,
        formState: { errors }

    } = useForm<FormData>({
        mode:"onBlur",
        resolver: zodResolver(schema)
    })
    const router = useRouter()

    return(
        <>
        <form action="">


        </form>
        
        
        </>
    )

}
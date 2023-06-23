"use client"
import {FormEvent} from "react"
import { useRouter } from "next/navigation"
import { api } from "../lib/api"
import  { z }  from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

const schema  = z.object({
    name: z.string().min(4, {
        message:" Nome de usuário precisa ser maior"
    }),
    password: z.string().min(8,{
        message: "A senha deve ter no minimo 8 caracteres"
    })
})

type FormData = z.infer<typeof schema>

export default function RegisterForm() {
    const {
        handleSubmit,
        register,
        formState: { errors }

    } = useForm<FormData>({
        mode:"onBlur",
        resolver: zodResolver(schema)
    })
    const router = useRouter()
    
    type FormInfo = {
        name: string,
        password: string
    }

    async function handleUserCreation({name, password}: FormInfo){
        await api.post("/user", {
            name,
            password
        })
        router.push("/Login")
    }

    return(
        <form
         onSubmit={handleSubmit ( async (data)=>{
            handleUserCreation(data)
        })} 

        className="bg-[#252424] w-[20rem] h-[25rem] flex flex-col justify-center items-center gap-7">
            <label htmlFor="">
                <p>Nome de Usuário</p>
                <input type="text" {...register("name")}  className="bg-black w-[16rem] h-12 text-white" />
            </label>    
                {
                    errors.name?.message && <span className="text-sm text-red-500">{errors.password?.message}</span>
                }
            <label htmlFor="">
                <p>Senha</p>
                <input type="password" {...register("password")}  className="bg-black h-12 w-[16rem] text-white"  />
            </label> 
                {
                    errors.password?.message && <span className="text-sm text-red-500">{errors.password?.message}</span>
                }
           
            <a href="" className="bg-white text-black w-[16rem] h-12 flex justify-center cursor-pointer">
                <input type="submit" value="Cadastrar" />
            </a>
        </form>
    )
}
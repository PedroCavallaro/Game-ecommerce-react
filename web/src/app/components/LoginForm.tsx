"use client"
import { api } from "../lib/api"
import  { z }  from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";


const schema  = z.object({
    name: z.string().min(4, {
        message:" Nome de usuário precisa ser maior"
    }),
    password: z.string().min(8,{
        message: "A senha deve ter no minimo 8 caracteres"
    })
})

type FormData = z.infer<typeof schema>

export default function LoginForm() {
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
    
        async function GetInfo({name, password}: FormInfo) {
            await api.get(`/user/${name}/${password}`)
            .then((res)=> {
                const response = res.data
                const d = new Date();
                document.cookie = `token=${response}; expires=${d.setTime(d.getTime() + 3600)}`
                router.push("./")
            })    
        }

 
    return (
        <form
        onSubmit={handleSubmit ( async (data)=>{
           GetInfo(data)
       })} 

       className="bg-[#252424] w-[20rem] h-[25rem] flex flex-col justify-center items-center gap-7">
           <label htmlFor=""
           className="flex flex-col">
               <p>Nome de Usuário</p>
               <input type="text" {...register("name")}  className="bg-black w-[16rem] h-12 text-white" />
               {
                   errors.name?.message && <span className="text-sm text-red-500">{errors.name?.message}</span>
               }
           </label>    
           <label htmlFor=""
           className="flex flex-col">
               <p>Senha</p>
               <input type="password" {...register("password")}  className="bg-black h-12 w-[16rem] text-white"  />
               {
                   errors.password?.message && <span className="text-sm text-red-500">{errors.password?.message}</span>
               }
           </label> 
          
            <a href="./" id="enter">
                <input type="submit" value="Entrar" className="bg-white text-black w-[16rem] h-12 cursor-pointer"/>
            </a>
            <a href="./Register" className="bg-white text-black w-[16rem] h-12 flex justify-center cursor-pointer">
                <input type="button" value="Cadastre-se" />
            </a>
        </form>
    )

}
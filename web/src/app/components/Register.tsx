"use client"
import {FormEvent} from "react"
import { useRouter } from "next/navigation"
import { api } from "../lib/api"

export default function RegisterForm() {
    const router = useRouter()
    
    async function handleUserCreation(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name")
        const password = formData.get("password")

        if(name && password){
            await api.post("/user", {
                name,
                password
            })
        }
        router.push("/")
    }

    return(
        <form onSubmit={handleUserCreation} className="bg-[#252424] w-[20rem] h-[25rem] flex flex-col justify-center items-center gap-7">
            <label htmlFor="">
                <p>Nome de Usuário</p>
                <input type="text" name="name" className="bg-black w-[16rem] h-12 text-white" />
            </label>    
            <label htmlFor="">
                <p>Senha</p>
                <input type="password" name="password" className="bg-black h-12 w-[16rem] text-white"  />
            </label> 
           
            <a href="" className="bg-white text-black w-[16rem] h-12 flex justify-center cursor-pointer">
                <input type="submit" value="Cadastrar" />
            </a>
        </form>
    )
}
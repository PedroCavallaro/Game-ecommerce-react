"use client"
import { useEffect, useMemo, useState } from "react"
import { api } from "../lib/api"
import { Product } from "./Card"



export default function LoginForm() {
    
        async function GetInfo() {
            
            const username: HTMLInputElement | null = document.querySelector("#username")
            const password: HTMLInputElement | null = document.querySelector("#password")
            await api.get(`/user/${username!.value}/${password!.value}`)
            .then((res)=> {
                const response = res.data
                const d = new Date();
                console.log(response)
                document.cookie = `token=${response}; expires=${d.setTime(d.getTime() + 3600)}`
                
            })    
        }

 
    return (
        <div className="bg-[#252424] w-[20rem] h-[25rem] flex flex-col justify-center items-center gap-7 overflow-hidden">
            <label htmlFor="">
                <p>Nome de Usuário</p>
                <input type="text" name="username" id="username" className="bg-black w-[16rem] h-12 text-white" />
            </label>    
            <label htmlFor="">
                <p>Senha</p>
                <input type="password" id="password" name="password" className="bg-black h-12 w-[16rem] text-white"  />
            </label> 
            <a href="./" id="enter">
                <input type="button" value="Entrar" onClick={GetInfo} className="bg-white text-black w-[16rem] h-12 cursor-pointer"/>
            </a>
            <a href="./Register" className="bg-white text-black w-[16rem] h-12 flex justify-center cursor-pointer">
                <input type="button" value="Cadastre-se" />
            </a>
        </div>
    )

}
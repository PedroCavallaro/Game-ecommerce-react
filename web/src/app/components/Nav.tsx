"use client"
import{ AlignJustify, Heart, ShoppingCart , UserCircle} from "lucide-react"
import { useEffect, useState } from "react"

export default function Nav() {

    const [isAuth, setAuth] = useState<string>()

    useEffect(()=>{
        setAuth(document.cookie)
    }, [])

    return (
        
        
        <nav className="bg-gray-200 h-11"> 
    
            <div className="flex justify-between p-2 text-black">
            <div>
                <a href="./../">
                    <h1 className="flex gap-1 hover:text-gray-600">
                        The Boys <p className="mt-2"> game store</p>
                    </h1>
                </a>
            </div>
            <ul className=" flex flex-row gap-10 items-center text-sm text-black">
                <a href="./Games" className="hover:text-gray-400">Jogos</a>
                <a href="" className="hover:text-gray-400">Sobre</a>
               
                <div className=" cursor-pointer flex items-center justify-center gap-10 ">
                    <a href="./">
                        <Heart/>
                    </a>
                    <a href="./Cart">
                        <ShoppingCart/>
                    </a>
                    <a href={isAuth? "./UserData" : "./Login"}>
                        <UserCircle/>
                    </a>
                </div>
            </ul>  
            </div>
        </nav>
    )


}
"use client"
import{ Heart, ShoppingCart , UserCircle} from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
export default function Nav() {
    const router = useRouter()
    const [isAuth, setAuth] = useState<string>()

    useEffect(()=>{
        setAuth(document.cookie)
    }, [])

    return (
        
        
        <nav className="bg-gray-200 h-11"> 
    
            <div className="flex justify-between p-2 text-black">
            <div>
                <Link href="./../">
                    <h1 className="flex gap-1 hover:text-gray-600">
                        The Boys <p className="mt-2"> game store</p>
                    </h1>
                </Link>
            </div>
            <ul className=" flex flex-row gap-10 items-center text-sm text-black">
                <a href="./Games" className="hover:text-gray-400">Jogos</a>
                <Link href="./About" className="hover:text-gray-400">Sobre</Link>
               
                <div className=" cursor-pointer flex items-center justify-center gap-10 ">
                    <a href="./WishList">
                        <Heart/>
                    </a>
                    <a href="./Cart">
                        <ShoppingCart/>
                    </a>
                    <button onClick={ () => isAuth? router.push("/UserData") : router.push("/Login")}>
                        <UserCircle/>
                    </button>
                </div>
            </ul>  
            </div>
        </nav>
    )


}
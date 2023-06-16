"use client"
import{ AlignJustify, Heart } from "lucide-react"
import RightMenu from "./RightMenu"


export default function Nav() {
    function showMenu(){
        const menu: Element | null = document.querySelector("#menu")
        menu?.classList.toggle("show")
    }
    return (
        
        
        <nav className="bg-gray-200 h-11"> 
    
            <div className="flex justify-between p-2 text-black">
            <div>
                <a href="./">
                    <h1 className="flex gap-1 hover:text-gray-600">
                        The Boys <p className="mt-2"> game store</p>
                    </h1>
                </a>
            </div>
            <ul className=" flex flex-row gap-10 items-center text-sm text-black">
                <a href="./Games" className="hover:text-gray-400">Jogos</a>
                <a href="" className="hover:text-gray-400">Alugar</a>
               
                <div className=" cursor-pointer flex items-center justify-center gap-10 ">
                    <Heart/>
                    <AlignJustify onClick={showMenu} className=""/>
                </div>
            </ul>  
            </div>
        </nav>
    )


}
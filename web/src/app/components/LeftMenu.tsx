"use client"
import {Button } from "./Button";
import { ButtonProps } from "./Button";

export default function LeftMenu() {
    let arrInfo: ButtonProps[] = []
    
    arrInfo.push({
        id: "UserData",
        tittle: "Dados",
        bgColor: "white",
        color: "black",
    },
    {
        id: "Cart",
        tittle: "Carrinho",
        bgColor: "white",
        color: "black",
    },
    {
        id: "WishList",
        tittle: "Lista de desejos",
        bgColor: "white",
        color: "black"
    },
    {
        id: "Buys",
        tittle: "Minhas Compras",
        bgColor: "white",
        color: "black",
    },
    {
        id: "LogOut",
        tittle: "Sair",
        bgColor: "white",
        color: "black",
    })
    
    const page = JSON.parse(localStorage.getItem("page") || "{}") as string
  
    arrInfo.map((info) =>{
        if(info.id === page){
                info.bgColor = "black"
                info.color = "white"
        }
    })
    return(
        <div className="w-80  bg-white flex h-[30rem] flex-col gap-10 overflow-hidden">
            {
                arrInfo.map((button) =>{
                    return (
                        
                        <Button key={button.tittle} id={button.id}
                         tittle={button.tittle} 
                         bgColor={button.bgColor} 
                         color={button.color}/>
                    )
                })
            }
        </div>
    )

}
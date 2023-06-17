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
    
    const page = window.location.href.toString().split("/")
     
    arrInfo.map((info) =>{
        if(info.id === page[page.length-1]){
                info.bgColor = "black"
                info.color = "white"
        }
    })
    return(
        <div className="w-3/12  bg-white flex flex-col gap-10 overflow-hidden">
            {
                arrInfo.map((button) =>{
                    return (
                        
                        <Button key={0} tittle={button.tittle} bgColor={button.bgColor} color={button.color}/>
                    )
                })
            }
        </div>
    )

}
import {Button } from "./Button";
import { ButtonProps } from "./Button";

export default function LeftMenu() {
    let arrInfo: ButtonProps[] = []
    
    arrInfo.push({
        tittle: "Dados",
        bgColor: "white",
        color: "black",
    },
    {
        tittle: "Carrinho",
        bgColor: "white",
        color: "black",
    },
    {
        tittle: "Minhas Compras",
        bgColor: "white",
        color: "black",
    },
    {
        tittle: "Sair",
        bgColor: "white",
        color: "black",
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
"use client"
import { Product } from "@/app/components/Card";
import InfoCard from "./InfoCard";
import NoItems from "./NoItems";
import { useMemo, useState } from "react";


export default function RightMenu() {
    
    function handleRemoveFromCart(){
        setArrProducts(JSON.parse(localStorage.getItem("cart") || "{}"))
    }
    
    const [arrProducts, setArrProducts] = useState<Product[]>([])
    
    const memo = useMemo(()=>{
        if(localStorage.getItem("cart")){
            setArrProducts(JSON.parse(localStorage.getItem("cart") || "{}"))
        }
    },[])

    if(arrProducts.length){

        return (
            <div className="bg-white w-[50rem] h-[30rem] overflow-scroll overflow-x-hidden" >
                
                {
                        arrProducts.map((product) =>{
                           if(product.qtd !== 0){
                               return(
                                   <div  key={product.id} className="shadow">
                                       <InfoCard
                                       desc={product.desc}
                                       section=""
                                       id={product.id}
                                       coverUrl={product.coverUrl}
                                       name={product.name}
                                       qtd={product.qtd}
                                       value={product.value}
                                   />
                                    </div>
                               )
                           }
                        })
                    }
                <div className="relative  ">
                    <input value={"Finalizar Compra"} type="submit" className="text-white absolute cursor-pointer rounded-full -top-[20rem] right-2 mt-2 p-2 bg-black hover:bg-gray-900"/>
                </div>
            </div>  
           
        )
        }else{
            return(
                <div className="bg-white flex justify-center w-[50rem] h-[30rem] overflow-scroll overflow-x-hidden" >
                    <NoItems iconId={Number(1)} text={"em seu carrinho"}/>
                </div>
            )
    }
}
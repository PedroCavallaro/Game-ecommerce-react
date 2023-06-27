"use client"
import { Product } from "@/app/components/Card";
import InfoCard from "./InfoCard";


export default function RightMenu() {
    let arrProducts: Product[] = []
    
    if(localStorage.getItem("cart")){

        arrProducts = JSON.parse(localStorage.getItem("cart") || "{}")
    }
    return (
        <div className="bg-white w-[50rem] h-[30rem] overflow-scroll overflow-x-hidden" >
            
            {
                    arrProducts.map((product) =>{
                       if(product.qtd !== 0){
                           return(
                               <div  key={product.id} className="shadow">
                                   <InfoCard
                                   
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
}
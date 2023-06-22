"use client"
import { Product } from "@/app/components/Card";
import InfoCard from "./InfoCard";


export default function RightMenu() {
    let arrProducts: Product[] = []
    arrProducts = JSON.parse(localStorage.getItem("cart") || "{}")
    return (
        <div className="bg-white w-[50rem] relative " >
            
            {
                    arrProducts.map((product) =>{
                        return(
                            <div  key={0} className="shadow">
                                <InfoCard
                            
                                coverUrl={product.coverUrl}
                                name={product.name}
                                qtd={product.qtd}
                                value={product.value}
                            />
                             </div>
                        )
                    })
                }
            
             <input value={"Finalizar Compra"} type="submit" className="text-white absolute cursor-pointer right-3 top-0 mt-2 p-2 bg-black hover:bg-gray-900"/>
        </div>    
    )
}
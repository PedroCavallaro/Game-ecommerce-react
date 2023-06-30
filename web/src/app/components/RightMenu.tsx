"use client"
import { Product } from "@/app/components/Card";
import InfoCard from "./InfoCard";
import NoItems from "./NoItems";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";


export default function RightMenu() {
    const router = useRouter()

    function handleRemoveFromCart(ProductsArr: Product[]){
        setArrProducts(ProductsArr)
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
                <div className=" relative ">
                    <input value={"Finalizar Compra"}
                    onClick={() => router.push("./Payment")}
                    type="submit" className="text-white absolute cursor-pointer rounded-full top-0 right-2 mt-2 p-2 bg-black hover:bg-gray-900"/>
                </div>
                {
                        arrProducts.map((product) =>{
                           if(product.qtd !== 0){
                               return(
                                   <div key={product.id} className="shadow">
                                       <InfoCard
                                        handlerCart={handleRemoveFromCart}
                                        released={product.released}
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
                
            </div>  
           
        )
        }else{
            return(
                <div className="bg-white flex justify-center w-[50rem] h-[30rem] overflow-scroll overflow-x-hidden" >
                    <NoItems iconId={Number(0)} text={"em seu carrinho"}/>
                </div>
            )
    }
}
"use client"
import { Product } from "@/app/components/Card"
import InfoCard from "@/app/components/InfoCard"
import NoItems from "@/app/components/NoItems"
import { useEffect, useMemo, useState } from "react"

export default function LeftSection() {
    
    const [products, setProducts] = useState<Product[]>([])
    const [total, setTotal] = useState<number>(0) 
    
    function handleCart(ProductsArr: Product[]){
        setProducts(ProductsArr)
    }
    useEffect(() => {
        let sum: number = 0 

        products.map((e) => sum += (e.value * e.qtd))   
        
        setTotal(sum)
    },[total, products])


    const memo = useMemo(()=>{
        setProducts(JSON.parse(localStorage.getItem("cart") || "{}"))
    },[])

    return(
        <div className="text-black flex justify-center items-center flex-col">
            <h2 className="text-2xl p-2">Itens</h2>
            <p>Total: R${total.toString()}</p>

            {
              products.length?      products.map((product) =>{
                        return(
                            <InfoCard
                            handlerCart={handleCart}
                            key={product.id}
                            released={product.released}
                            desc={product.desc}
                            section=""
                            id={product.id}
                            coverUrl={product.coverUrl}
                            name={product.name}
                            qtd={product.qtd}
                            value={product.value}
                        />

                        )
                    })
                    : (
                        <div className="flex justify-center items-center h-[25rem]">
                            <NoItems iconId={1} text="seu carrinho"/>
                        </div>
                    )
            }
        </div>
    )
};

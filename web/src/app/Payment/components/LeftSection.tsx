"use client"
import { Product } from "@/app/components/Card"
import InfoCard from "@/app/components/InfoCard"
import { useMemo, useState } from "react"

export default function LeftSection() {
    const [products, setProducts] = useState<Product[]>([])
    
    const memo = useMemo(()=>{
        setProducts(JSON.parse(localStorage.getItem("cart") || "{}"))
    },[])
    return(
        <div className="text-black flex justify-center items-center flex-col">
            <h2 className="text-3xl">Itens</h2>
            {
                products.map((product) =>{
                    return(
                        <InfoCard
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
            }
        </div>
    )
};

"use client"
import {useEffect, useMemo, useState} from "react"
import { api } from "../lib/api"
import { Card } from "../components/Card"
import Title from "../components/Title"
import Filter from "./components/Filter"

export interface Gender{
    desc: string
}

export interface ProductInfo{
    gender: Gender,
    product:{
        id: string,
        desc: string,
        name: string,
        value: number,
        mediaProduct: [
            {
                fileName: string
            }
        ]
    }
    
}
export default function Games() {
    
    const [genders, setGenders] = useState<Gender[]>([])
    const [products, setProducts] = useState<ProductInfo[]> ([])
    
    function filterProducts(product: ProductInfo[]){
        setProducts(product)
    }
    

    const memo = useMemo( async ()=>{
        const genders = await api.get("/genders")
        const { data } = genders
        setGenders(data) 
        {
            const products = await api.get("/genders&products")
            const {data} = products
            setProducts(data)
        }

    },[])
   
    return(
        <>
        <Title/>
        <div className="flex pl-2">
            <div className="mt-[5rem] h-[20rem] p-5 bg-white">
                <Filter 
                handleFilter={filterProducts}
                products={products}
                genders={genders}/>
        
            </div>
        <div>
            {
                genders.map((gender) =>{
                    return(
                        <>
                        <div className="flex flex-col  ml-4">
                            <h1 className="text-lg p-2 ml-4">{gender.desc}</h1>
                            <div className="flex gap-7">
                            {
                                products.map((product, index)=>{
                                    if(product.gender.desc === gender.desc){
                                  
                                        return(
                                            <Card 
                                            key={index.toString()}
                                            id={product.product.id}
                                            name={product.product.name}
                                            qtd={1}
                                            value={product.product.value}
                                            desc={product.product.desc}
                                            coverUrl={product.product.mediaProduct[0].fileName}/>
                                        )
                                    }
                                })
                            }
                                </div>
                            </div>
                        </>
                    )
                })
                   
            }
            </div>
        </div>
       
        </>
    )
}
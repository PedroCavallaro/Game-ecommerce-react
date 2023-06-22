"use client"
import {useEffect, useMemo, useState} from "react"
import { api } from "../lib/api"
import { Card } from "../components/Card"

interface Gender{
    desc: string
}

interface ProductInfo{
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
    console.log(products)
    return(
        <div>
            {
                
                genders.map((gender) =>{
                    return(
                        <>
                        <div key={0} className="">
                            <div className="text-lg p-2 ml-4">
                                <h1>{gender.desc}</h1>
                            </div>
                            <div className="flex gap-9 ml-4">
                            {
                                products.map((product)=>{
                                    if(product.gender.desc === gender.desc){
                                  
                                        return(
                                            <Card 
                                            key={0}
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
       
    )
}
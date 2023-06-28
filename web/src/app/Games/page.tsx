"use client"
import {useEffect, useMemo, useState} from "react"
import { api } from "../lib/api"
import { Card } from "../components/Card"
import Filter from "./components/Filter"
import SliderButtons from "../components/SliderButtons"

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
        released: boolean,
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

    const [search, setSearch ] = useState<string>('') 
    const [genderSeach, setGenderSeach] = useState<string>('')

    function filterProductsHandle(search: string){
        setSearch(search)
    }
    
    function filterGendersHandle(search: string){
        setGenderSeach(search)
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
    
    const lowerSearch = search.toLowerCase()
    const filteredGenders = genders.filter((e) => e.desc.includes(genderSeach))
    const filteredProducts = products.filter((e) => e.product.name.toLowerCase().includes(lowerSearch))

    return(
        <>
        <div className="flex pl-2">
            <div className="mt-[5rem] h-[30rem] p-5 bg-white">
                <Filter 
                handleFilterGenders={filterGendersHandle}
                handleFilter={filterProductsHandle}
                products={products}
                genders={genders}/>
        
            </div>

        <div className="flex w-full flex-col overflow-hidden ml-4">
            {
                filteredGenders.map((gender, index) =>{
                    return(
                        <>
                        
                            <h1 key={gender.desc} className="text-lg p-2 ml-4">{gender.desc}</h1>
                            <div key={Math.random()} className="flex gap-7 ">
                            {
                                filteredProducts.map((product, prodIndex)=>{
                                    if(product.gender.desc === gender.desc){
                                        
                                        return(
                                            <Card
                                            section={`section${index}`}
                                            key={Math.random()}
                                            id={product.product.id}
                                            released={product.product.released}
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
                            <div
                            key={Math.random()}
                            className="flex justify-center items-center mt-5">

                                <SliderButtons key={Math.random()} arr={filteredProducts} sectionId={index.toString()} />    
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
"use client"
import { useState } from "react"
import { Gender, ProductInfo } from "../page"

interface FilterProps { 
    genders: Gender[],
    products: ProductInfo[],
    handleFilter: Function
}
export default function Filter({handleFilter, genders, products}: FilterProps) {
   
    const filter = (e: any, filtereProducts: ProductInfo[]) =>{
        e.preventDefault()
        handleFilter(filtereProducts)
    }
    return(
        <>
            <div className="flex flex-col gap-2 text-black">
            <h2
            className="text-lg"
            >Filtros</h2>
            <label
            className="text-md"
            htmlFor="search">Buscar por nome</label>
            <input type="text" id="search"
            className="bg-black text-white h-10 p-2"
            placeholder="Buscar..."
            onChange={event => filter(event, products.filter((e) => e.product.name.includes(event.target.value)))}
            />
            <p>Buscar por genêro</p>
                {
                    genders.map((gender, index)=>{
                        return(
                            <label key={index.toString()} 
                            className="flex gap-2"
                            htmlFor="">
                                <input 
                                className="cursor-pointer"
                                type="checkbox" 
                                onClick={(e)=>{
                                    filter(e, products.filter((e) => e.gender.desc === gender.desc ))
                                }}
                                 name="" id="" value={gender.desc}/>
                                <h2>{gender.desc}</h2>
                            </label>
                        )
                    })
                }
                <label htmlFor=""
                   className="flex gap-2"
                   >
                <input type="checkbox" 
            
                name="" 
                id="" />
                <h2>Limpar filtros</h2>
                </label>
            </div>
        </>
    )
};

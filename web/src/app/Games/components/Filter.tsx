"use client"
import { useState } from "react"
import { Gender, ProductInfo } from "../page"

interface FilterProps { 
    genders: Gender[],
    products: ProductInfo[],
    handleFilter: Function,
    handleFilterGenders: Function
}
export default function Filter({handleFilter, genders, handleFilterGenders}: FilterProps) {
   
    const filter = (e: any, search:string) =>{
        e.preventDefault()
        handleFilter(search)
    }
    const filterGenders = (e: any, gender:string) =>{
        e.preventDefault()
        handleFilterGenders(gender)
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
                onChange={event => filter(event, event.currentTarget.value)}
                />
            <p>Buscar por genêro</p>
                {
                    genders.map((gender, index)=>{
                        return(
                            <label 
                            key={gender.desc.toString()} 
                            className="flex gap-2"
                            htmlFor="">
                                <input 
                                className="cursor-pointer transition-all hover:bg-black  hover:text-white w-[10rem]"
                                type="button" 
                                onClick={(e)=>{
                                    filterGenders(e, e.currentTarget.value)
                                }}
                                 name="" id="" value={gender.desc}/>
                                
                            </label>
                        )
                    })
                }
                <label htmlFor=""
                   className="flex gap-2"
                   >
                <input type="button" 
                className="cursor-pointer transition-all hover:bg-black  hover:text-white w-[10rem]" 
                name="" 
                id="" 
                onClick={(e)=> filterGenders(e, "")}
                value="Limpar filtros"
                />
                </label>
            </div>
        </>
    )
};

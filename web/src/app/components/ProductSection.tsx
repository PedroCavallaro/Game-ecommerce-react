"use client"
import { api } from '../lib/api';
import {Card, Product } from '../components/Card';
import { useState, useMemo } from 'react';

export default function ProductSection(){
    const [products, setProducts] = useState<Product[]>([])
    
    const memo = useMemo(async ()=>{
        await api.get("./products")
        .then(function (res:any){
                setProducts(res.data)
                console.log(res.data)
        })
    }, [])
   
    return(
            
        <div className='w-screen flex justify-center gap-5'>
            {
                products.map((e: any) =>{
          
                    return (
                        <Card qtd={1} id={e.id} key={e.name} name={e.name} desc={e.desc} value={e.value} coverUrl={e.coverUrl}/>
                    )
                })
            }
           
        </div>
    
    )
}
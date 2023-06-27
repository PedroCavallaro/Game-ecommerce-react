"use client"
import { api } from '../lib/api';
import {Card, Product } from '../components/Card';
import { useState, useMemo } from 'react';
import SliderButtons from './SliderButtons';

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
            
        <div className='w-[50rem]'>
            <div className='flex justify-start gap-5'>

            {
                products.map((e: any) =>{
          
                    return (
                        <Card 
                        section='section1'
                        qtd={1} 
                        id={e.id} 
                        key={e.name} 
                        name={e.name}
                        desc={e.desc}
                        value={e.value}
                        coverUrl={e.coverUrl}/>
                        )
                    })
                }
            </div>
            <div className='w-[80rem] flex justify-center items-center'>
                <SliderButtons sectionId='1' arr={products}/>
            </div>
        </div>
    )
}
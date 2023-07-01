"use client"
import { api } from '../lib/api';
import {Card, Product } from '../components/Card';
import { useState, useMemo } from 'react';
import SliderButtons from './SliderButtons';
import Loading from './Loading';

export default function ProductSection(){
    const [products, setProducts] = useState<Product[]>([])
    const [loader, setLoader] = useState<boolean>(false)

    const memo = useMemo(async ()=>{
        await api.get("./products")
        .then(function (res:any){
                setProducts(res.data)
        })
        setLoader(true)
    }, [])
   const preSale = products.filter((e)=> !e.released)
    return(
            
        <div className=' overflow-hidden'>
            {!loader && <Loading/> }           
            <h2
                className='text-2xl'
                >Em estoque</h2>
            <div className='flex justify-start gap-5'>
            {
                products.map((e: Product) =>{
                    if(e.released === true){
                        return (
                            <Card 
                            section='section1'
                            qtd={1} 
                            released={e.released}
                            id={e.id} 
                            key={e.name.toString()} 
                            name={e.name}
                            desc={e.desc}
                            value={e.value}
                            coverUrl={e.coverUrl}/>
                            )
                        }
                    })
                }
            </div>
            <div className='w-[80rem] flex justify-center items-center p-2'>
                <SliderButtons sectionId='1' arr={products}/>
            </div>

            <div className=' overflow-hidden  text-white'>
                <h2
                className='text-2xl'
                >Pré-Venda</h2>
                <div className='flex justify-start gap-5'>
                {
                    preSale.map((e: Product) =>{
                            return (
                                <Card 
                                section='section2'
                                qtd={1} 
                                released={e.released}
                                id={e.id} 
                                key={e.name} 
                                name={e.name}
                                desc={e.desc}
                                value={e.value}
                                coverUrl={e.coverUrl}/>
                                )
                            }
                        )
                }
                </div>
                <div className='w-[80rem] flex justify-center items-center p-2'>
                    <SliderButtons sectionId='2' arr={preSale}/>
                </div>
            </div>
        </div>
    )
}
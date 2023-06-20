"use client"
import Image from 'next/image'
import ProductInfo from './components/ProductInfo'
import { useState, useMemo, useEffect, cache } from 'react'
import { Product } from '../components/Card'
import { api } from '../lib/api'




export default function ProductPage() {    
    const [product, setProducts] = useState<Product[]>([])
   
    
  
    const memo = useMemo(async ()=>{
      const url = new URLSearchParams(window.location.search)
    await api.get(`./products/${url.get("product")}`)
    .then(function (res){
      setProducts(res.data)
    })
  }, [])


  return (
    <main className="flex justify-center center items-center w-screen h-[40rem]">
          {
            product.map((e)=>{
             return (
               <ProductInfo key={e.id} 
                   coverUrl={e.coverUrl}
                   name={e.name}
                   value={e.value}
                   desc={e.desc}
                   id={e.id}
                   qtd={e.qtd}
                 />
             )
            })
          }
    </main>
  )
}

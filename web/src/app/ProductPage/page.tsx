"use client"
import ProductInfo from './components/ProductInfo'
import { useState, useMemo, useEffect} from 'react'
import { Product } from '../components/Card'
import { api } from '../lib/api'
import Title from '../components/Title'



export default function ProductPage() { 

    const [product, setProducts] = useState<Product[]>([])
    
    const memo = useMemo(async ()=>{
      let idProduct = localStorage.getItem('id') as string
      
      await api.get(`products/${idProduct}`)
      .then(function(response){
        setProducts(response.data)
      })
  }, [])


  return (
    <>
      <Title/>
      <main className="flex justify-center center items-center w-screen h-[40rem]">
            {
              product.map((e, index)=>{
              return (
                <ProductInfo key={e.id}
                    section={index.toString()} 
                    coverUrl={e.coverUrl}
                    name={e.name}
                    value={e.value}
                    desc={e.desc}
                    id={e.id}
                    qtd={1}
                  />
              )
              })
            }
      </main>
    </>
  )
}

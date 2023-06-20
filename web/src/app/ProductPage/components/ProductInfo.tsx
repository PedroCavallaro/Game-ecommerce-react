"use client"
import { api } from "@/app/lib/api"
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { Product } from "@/app/components/Card"
import {Heart, ShoppingBag, ShoppingCart} from "lucide-react"


export default function ProductInfo(product: Product) {            
  return(
            <div className="flex w-screen justify-center items-center gap-7">
                <div className="flex justify-center items-center">
                        <Image src={`/assets/${product.coverUrl}`} 
                        width={2000}
                        height={2000}
                        className="w-[25rem] h-[35rem] object-cover"
                        alt=""/>
                    </div>
                    <div className="w-[50rem] bg-white h-[35rem]">
                        <div className="flex flex-col justify-evenly h-[30rem] ml-5 gap-18">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-black text-[3rem]">{product.name}</h1>
                                <p className="text-black text-lg" >R$ { product.value }</p>
                            </div>
                            <div className="flex flex-col gap-8">
                                <button>
                                        <Heart color="#000"/>
                                </button>
                            <p className="text-black text-lg">{product.desc}</p>
                            </div>
                            <div className="flex gap-8">
                                <label htmlFor="" 
                                className="bg-black rounded-full flex justify-center items-center gap-3 text-white w-32 h-12
                                    hover:bg-gray-900 cursor-pointer transition-all" >
                                     <ShoppingBag />
                                    <input className="cursor-pointer" type="button" value="Comprar" />
                                </label>
                                <label htmlFor="" 
                                className="bg-black cursor-pointer rounded-full flex justify-center items-center gap-3 text-white w-32 h-12
                                                hover:bg-gray-900 transition-all">
                                    <ShoppingCart color="#FFF"/>
                                    <input className="cursor-pointer" type="button" value="Carrinho" />
                                </label>
                            </div>
                        </div>
                </div>
            </div>
      )
}
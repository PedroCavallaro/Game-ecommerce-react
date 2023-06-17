"use client"
import { api } from "@/app/lib/api"
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { Product } from "@/app/components/Card"



export default function ProductInfo() {            
  return(
            <div>
                <div key={0}>
                        <div>
                            <Image src={`/assets/gow.jpeg`} 
                            width={500}
                            height={500}
                            alt=""/>
                        </div>
                        <div>
                            <p>oi</p>
                        </div>

                    </div>
            </div>
      )
}
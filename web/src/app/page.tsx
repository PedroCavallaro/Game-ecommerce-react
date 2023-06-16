"use client"
import Hero from './components/Hero'

import { lazy } from 'react'
import ProductSection from './components/ProductSection'
// const ProductSection = lazy(()=> import("./components/ProductSection"))

export default function Home() {
	return (
    <main className="flex flex-col h-[70rem]">
        
        <Hero/>
		<div className='flex justify-center overflow-hidden'>

           <ProductSection/>  
		</div>
    </main>
  )
}

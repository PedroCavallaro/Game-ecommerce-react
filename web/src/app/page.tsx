"use client"
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'

export default function Home() {
	return (
    <main className="flex flex-col h-[60rem]">
        
        <Hero/>
		<div className='flex justify-center overflow-hidden'>

           <ProductSection/>  
		</div>
    </main>
  )
}

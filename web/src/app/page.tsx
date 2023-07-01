"use client"
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'

export default function Home() {
	return (
    <>
      
      <main className="flex flex-col relative overflow-x-hidden ">
          
          <Hero/>
      <div className='flex justify-start ml-[10rem] w-[80rem] '>

            <ProductSection/>  
      </div>
      </main>
    </>
  )
}

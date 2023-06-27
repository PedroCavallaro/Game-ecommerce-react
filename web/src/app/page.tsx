"use client"
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Title from './components/Title'

export default function Home() {
	return (
    <>
      <Title/>
      <main className="flex flex-col h-[60rem] overflow-hidden">
          
          <Hero/>
      <div className='flex justify-start ml-[10rem] w-[80rem] overflow-hidden'>

            <ProductSection/>  
      </div>
      </main>
    </>
  )
}

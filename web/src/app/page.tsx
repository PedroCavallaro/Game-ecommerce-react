"use client"
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import Title from './components/Title'

export default function Home() {
	return (
    <>
      <Title/>
      <main className="flex flex-col h-[60rem]">
          
          <Hero/>
      <div className='flex justify-center overflow-hidden'>

            <ProductSection/>  
      </div>
      </main>
    </>
  )
}

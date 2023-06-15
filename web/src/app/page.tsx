'use client'
import Image from 'next/image'
import Hero from './components/Hero'
import Card from './components/Card'



export default function Home() {
	const menuButton = document.querySelector(".menu")
	
	return (
    <main className="flex flex-col h-[70rem]">
        <Hero/>
		<div className='flex justify-center overflow-hidden'>
			<Card/>	
		</div>
    </main>
  )
}

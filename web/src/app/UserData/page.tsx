"use client"
import RightMenu from '../components/RightMenu'
import LeftMenu from '../components/LeftMenu'
import Title from '../components/Title'

export default function Cart() {
	return (
		<>
		<Title/>
		<main className="flex mt-16 justify-center items-center">
			<div className='flex justify-center  gap-20'>
				<LeftMenu/>
				
			</div>
		</main>
		</>
  )
}
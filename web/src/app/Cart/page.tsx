"use client"
import RightMenu from '../components/RightMenu'
import LeftMenu from '../components/LeftMenu'

export default function Cart() {
	return (
		<>
		<main className="flex mt-16 justify-center items-center">
			<div className='flex justify-center  gap-20'>
				<LeftMenu/>
				<RightMenu/>
			</div>
		</main>
		</>
  )
}

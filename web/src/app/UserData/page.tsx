"use client"
import { UserCircle } from 'lucide-react'
import LeftMenu from '../components/LeftMenu'
import Cookies from "js-cookie"
import jwtDecode from 'jwt-decode'




export default function Cart() {
	const token: any = jwtDecode(Cookies.get("token")!)

	const {name} = token[0]

	return (
		<>
		<main className="flex mt-16 justify-center items-center">
			<div className='flex justify-center  gap-20'>
				<LeftMenu/>
				<div className="bg-white w-[50rem] h-[30rem] overflow-scroll overflow-x-hidden text-black flex justify-center items-center flex-col gap-2">
				<UserCircle 
				className='h-20 w-20'
				color='#000'/>
				<p>{name}</p>
				</div>
			</div>
		</main>
		</>
  )
}
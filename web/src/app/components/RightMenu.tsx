"use client"
import { ChevronRight, UserCircle, ShoppingBag, ShoppingCart, LogOut  } from 'lucide-react';

export default function RightMenu() {
    function closeCart(){
        const menu: Element | null = document.querySelector("#menu")
        menu!.classList.remove("show")
    }
    return (
        <section id="menu" className="flex h-[80rem] w-64 absolute right-0 bg-gray-200 overflow-hidden">
            <div className='flex flex-col w-[100%]'>
                <ChevronRight onClick={closeCart} color='#000000' className='w-9 h-11 cursor-pointer'/>
                <div className='flex justify-center items-center flex-col w-[100%] gap-5 mt-9 cursor-pointer'>
                    <UserCircle  color='#000000' className='w-20 h-20 '/>
                    <p className='text-black'>User</p>
                </div>
                <div className='border-t-2 border-b-2 border-black flex p-1 mt-2 gap-3 cursor-pointer hover:border-gray-500'>
                    <ShoppingCart color='#000000'/>
                    <p className='text-black'>Carrinho</p>
                </div>
                <div className='border-t-2 border-b-2 border-black flex p-1 mt-2 gap-3 cursor-pointer hover:border-gray-500'>
                    <ShoppingBag color='#000000'/>
                    <p className='text-black'>Minhas compras</p>
                </div>
                <div className='border-t-2 border-b-2 border-black flex p-1 mt-2 gap-3 cursor-pointer hover:border-gray-500'>
                    <LogOut  color='#000000'/>
                    <p className='text-black'>Sair</p>
                </div>
            </div>
        </section>
    )
}
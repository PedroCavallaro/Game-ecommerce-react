import { ChevronRight, UserCircle, ShoppingBag, ShoppingCart, LogOut  } from 'lucide-react';

export default function RightMenu() {
    return (
        <section className="flex h-[80rem] w-64 absolute right-0 bg-gray-200 overflow-hidden">
            <div className='flex flex-col w-[100%]'>
                <ChevronRight color='#000000' className='w-9 h-11 cursor-pointer'/>
                <div className='flex justify-center items-center flex-col w-[100%] gap-5 mt-9'>
                    <UserCircle  color='#000000' className='w-20 h-20 '/>
                    <p className='text-black'>User</p>
                </div>
                <div className='border-t-2 border-b-2 border-black flex p-1 mt-2 gap-3'>
                    <ShoppingCart color='#000000'/>
                    <p className='text-black'>Carrinho</p>
                </div>
                <div className='border-t-2 border-b-2 border-black flex p-1 mt-2 gap-3'>
                    <ShoppingBag color='#000000'/>
                    <p className='text-black'>Minhas compras</p>
                </div>
                <div className='border-t-2 border-b-2 border-black flex p-1 mt-2 gap-3'>
                    <LogOut  color='#000000'/>
                    <p className='text-black'>Sair</p>
                </div>
            </div>
        </section>
    )
}
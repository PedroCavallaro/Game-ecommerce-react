import Image from 'next/image'
import gow from '../../assets/gow.jpeg'
import { ShoppingCart, ArrowRight} from 'lucide-react';
import Link from 'next/link';

export default function Card() {
    return(

        <div className='bg-white w-1/6  text-black flex flex-col gap-3 mt-5'>
               <div className='flex justify-center items-center flex-col gap-2 '>
                    <Image src={gow} 
                        alt="gow" 
                        className='h-52 w-48 object-cover p-1 mt-1 rounded-[0.5rem]'
                        />
                        <div>
                            <h2>God Of War: Ragnarok</h2>
                        </div>
               </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center items-center'>
                        <ShoppingCart className='cursor-pointer'/>
                    </div>
                    <div className='flex justify-between '>
                        <div>
                            <h3 className='price'>Valor</h3>
                            <h3 className='price unity'>250</h3>
                        </div>
                        <label>
                            <Link href="./">
                                <ArrowRight className='relative -bottom-4'/>
                            </Link>
                            
                        </label>
                    </div>
                </div>
            </div>
        )
}
import Image from 'next/image'
import { ShoppingCart, ArrowRight} from 'lucide-react';
import Link from 'next/link';

export interface Product{
    name: string,
    desc: string,
    value: number,
    coverUrl: string,
}

export function Card(product: Product) {
    return(
        <div className='bg-white text-black flex flex-col gap-3 mt-5 w-60'>
               <div className='flex justify-center items-center flex-col gap-2 '>
                    <Image src={`/assets/${product.coverUrl}`}
                        width={500}
                        height={234}
                        alt={product.coverUrl} 
                        className='h-52 w-56 object-cover p-1 mt-1 rounded-[0.5rem]'
                        />
                        <div>
                            <h2>{product.name}</h2>
                        </div>
               </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center items-center'>
                        <ShoppingCart className='cursor-pointer'/>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div>
                            <h3 className='price'>Valor</h3>
                            <h3 className='price unity'>{product.value}</h3>
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
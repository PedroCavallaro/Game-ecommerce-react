import Image from 'next/image'
import { ShoppingCart, ArrowRight} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

export interface Product{
    id:string
    name: string,
    desc: string,
    value: number,
    coverUrl: string,
    qtd: number
}
export const saveProduct = (product : Product)=>{
    let arrProducts : Product[] = [] 
    const newProduct: Product = {
        id: product.id,
        coverUrl: product.coverUrl,
        name: product.name,
        desc:product.desc,
        value: product.value,
        qtd: product.qtd
    }   

    if(localStorage.getItem("cart")){
       
       arrProducts = JSON.parse(localStorage.getItem("cart") || "{}")

        if(arrProducts.find(product => product.name === newProduct.name)){
            arrProducts.map((product) =>{
                if(product.name === newProduct.name){
                    product.qtd += 1
                }
                
            })
            localStorage.setItem("cart", JSON.stringify(arrProducts))
        }else{
            arrProducts.push(newProduct)
            localStorage.setItem("cart", JSON.stringify(arrProducts))     
        }
            
        
    }else{
       arrProducts.push(newProduct)
       localStorage.setItem("cart", JSON.stringify(arrProducts))
    }
}
export  function setProductId(id: string, router: AppRouterInstance){
    localStorage.setItem('id', id)
    router.push('/ProductPage')
}
export function Card(product: Product) {
    const router = useRouter()
    return(
        <div className='bg-white text-black flex flex-col gap-3 mt-5 w-60'>
               <div className='flex justify-center items-center flex-col gap-2 h-30 overflow-hidden '>
                    <Image src={`/assets/${product.coverUrl}`}
                        width={500}
                        height={234}
                        alt={product.coverUrl} 
                        className='h-52 w-56 object-cover p-1 mt-1 rounded-[0.5rem] '
                        />
                        <div>
                            <h2>{product.name}</h2>
                        </div>
               </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-center items-center'>
                        <ShoppingCart onClick={() =>{ saveProduct(product)} } className='cursor-pointer'/>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div>
                            <h3 className='price'>Valor</h3>
                            <h3 className='price unity'>R$ {product.value}</h3>
                        </div>
                        <label>
                            <button onClick={() => setProductId(product.id, router)}>
                                <ArrowRight className='relative -bottom-4' />
                            </button>
                            
                        </label>
                    </div>
                </div>
            </div>
        )
}
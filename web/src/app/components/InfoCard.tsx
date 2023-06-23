import { Product } from "@/app/components/Card"
import Image from "next/image"
import { Trash } from 'lucide-react';

export default function InfoCard(product:Omit<Product, "desc" | "id">) {


return(
    <div className="flex p-3 h-[10rem]">
        <div className="flex shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75)] w-[25rem] h-auto">
            <Image src={`/assets/${product.coverUrl}`} alt={product.name}
            width={1000}
            height={1000}
            className="w-36 h-30"/>
            <div className="flex flex-col w-[10rem] gap-4 text-black ml-3">
                    <h2>{product.name}</h2>
                    <p>{product.qtd}x</p>
                    <p>R$ {product.value * product.qtd}</p>
            </div>
        
         <div className="flex flex-col gap-3 justify-center ml-20 w-8 mt-2 mr-3">
            <input  className="text-white bg-black cursor-pointer hover:bg-gray-900 " type="button" value="+" />
            <input className="text-white bg-black cursor-pointer hover:bg-gray-900" type="button" value="-" />
            <div className="bg-black flex justify-center items-center p-1 hover:bg-gray-900 cursor-pointer"> 
              <Trash color="#fff" className="w-4 h-4"/>
           </div>
           </div>
         </div>
    </div>
)

}
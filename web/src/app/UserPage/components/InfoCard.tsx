import { Product } from "@/app/components/Card"
import Image from "next/image"
export default function InfoCard(product:Omit<Product, "desc" | "id">) {


return(
    <div className="flex p-3">
        <div className="flex shadow-[0px_0px_4px_0px_rgba(0,0,0,0.75)]">
            <Image src={`/assets/${product.coverUrl}`} alt="oi"
            width={1000}
            height={1000}
            className="w-28 h-28"/>
            <div className="flex flex-col gap-4 text-black ml-3">
                    <h2>{product.name}</h2>
                    <p>{product.qtd}x</p>
                    <p>R$ {product.value}</p>
            </div>
        
         <div className="flex flex-col gap-3 ml-20 w-8 mt-2 mr-3">
           <input  className="text-white bg-black cursor-pointer hover:bg-gray-900 " type="button" value="+" />
           <input className="text-white bg-black cursor-pointer hover:bg-gray-900" type="button" value="-" />
           </div>
         </div>
    </div>
)

}
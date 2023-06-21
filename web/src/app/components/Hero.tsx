import { useState, useMemo } from "react"
import Image from 'next/image'
import { api } from "../lib/api"
import { Product, setProductId } from "./Card"
import { useRouter } from "next/navigation"


export default function Hero() {
    const [products, setProducts] = useState<Product[]>([])
    const router = useRouter()
    
    const memo = useMemo(async ()=>{
        await api.get("./products")
        .then(function (res:any){
                setProducts(res.data)
                
        })
    }, [])
   
    return(
        <div className="m-0 flex flex-row justify-around items-center gap-[28rem]  h-[30rem] ">
            <div className="flex  items-center  ">
                
                    {
                        products.map((products) =>{
                            return(
                                    <Image 
                                    key={0} 
                                    width={1000}
                                    height={1000}
                                    className="w-[40rem] h-[25rem] object-cover hover:scale-[1.03] transition absolute"
                                    src={`/assets/${products.coverUrl}`}
                                    alt={products.name}/>
                            )                       
                        })
                    }
               
            </div>
            <div className="m-0 p-0 flex w-[40rem] h-[25rem] bg-gray-50">
                <div className="p-5 flex flex-col gap-20 text-black">
                    <h1>God of War: Ragnarok</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ex dolor, rerum incidunt hic ipsum et cumque recusandae nulla. Tempora obcaecati qui recusandae similique est quisquam. Tempore sit sed doloremque.</p>
                    <a href="" 
                    className="bg-black rounded-full flex justify-center items-center text-white w-28
                        hover:bg-gray-900 transition-all ">
                        <p className="p-2">
                            Saiba mais
                        </p>
                        {
                                
                        }
                        </a>
                    </div>
                </div>
            </div>
    )
        
}

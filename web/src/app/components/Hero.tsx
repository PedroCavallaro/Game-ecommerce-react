import { useState, useMemo, useEffect, use } from "react"
import Image from 'next/image'
import { api } from "../lib/api"
import { Product, setProductId } from "./Card"
import { useRouter } from "next/navigation"
import { Button } from "./Button"


export default function Hero() {
    function getProductInfo(count:number){
        const res = JSON.parse(localStorage.getItem("hero") || "{}")
        return res[count]
    }
    function moveImageRight(count: number){
        const img: NodeListOf<HTMLImageElement> = document.querySelectorAll(".img")
        
        img[count].classList.add("i")
        img[count].style.transform = "translate(41.9rem)"
        img[count].style.transition = "1s ease"
    }
    function MoveImageLeft(count:number){
        const img: NodeListOf<HTMLImageElement> = document.querySelectorAll(".i")
        
      
        img[count].style.transform = "translate(0%)"
    }
    const [products, setProducts] = useState<Product[]>([])
    let [count, setCount] = useState(0)
    const router = useRouter()

    const [hero, setHero] = useState<Product>()
  
    useEffect(()=>{
        setHero(getProductInfo(count))
    }, [count])

    const memo = useMemo(async ()=>{
        await api.get("./products")
        .then(function (res:any){
            localStorage.setItem("hero", JSON.stringify(res.data))
            setProducts(res.data.reverse())
        })
          
    }, [])
    return(
        <div className="m-0 flex flex-row justify-center items-center overflow-hidden h-[30rem] gap-7 ">
            <div className="flex h-[25rem] w-[40rem] items-center justify-center overflow-hidden">
                
                    {
                        products.map((products) =>{
                            return(
                                <div 
                                className="absolute"
                                key={0}>
                                        <Image 
                                    
                                    width={1000}
                                    height={1000}
                                    className=" w-[40rem] h-[25rem] object-cover hover:scale-[1.03] transition  z-0 img"
                                    src={`/assets/${products.coverUrl}`}
                                    alt={products.name}/>
                                </div>
                                   
                            )                       
                        })
                    }
            </div>
            <div className="m-0 p-0 flex w-[40rem] h-[25rem] bg-gray-50 z-50">
                <div className="p-5 flex flex-col gap-10 text-black">
                    <h1 className="h-28">{hero?.name}</h1>
                    <p className="h-56 overflow-hidden">{hero?.desc}</p>
                    <button onClick={()=> setProductId(hero!.id, router)}
                    className="bg-black rounded-full flex justify-center items-center text-white w-28
                        hover:bg-gray-900 transition-all ">
                        <p className="p-2">
                            Saiba mais
                        </p>
                        </button>
                        <div className="flex gap-7 justify-center items-center">
                            <button 
                            className="text-lg font-extrabold"
                            onClick={()=> {
                                 if(count != 0){
                                    if(count === 2){
                                        MoveImageLeft(0)
                                        setCount(count -= 1)
                                    }else{
                                        MoveImageLeft(count)
                                        setCount(count -= 1)
                                    }
                                    console.log(count)
                                }
                            }}>{"<-"}</button>
                            {
                                products.map((e)=>{
                                    return(
                                        <input 
                                        className="bg-black h-3 w-3 rounded-full"
                                        type="button" value="" key={0} />
                                    )
                                })
                            }
                            <button 
                            className="text-lg font-extrabold"
                            onClick={()=> {
                               
                                if(count != 2){
                                    if(count === 0){
                                        moveImageRight(2)
                                        setCount(count += 1)
                                    }else{
                                        moveImageRight(count)
                                        setCount(count += 1)
                                    }
                                    console.log(count)
                                }
                            }}>{"->"}</button>
                        </div>  
                    </div>
                
                </div>
            </div>
    )
        
}

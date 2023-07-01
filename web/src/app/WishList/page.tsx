"use client"
import LeftMenu from "../components/LeftMenu";
import { useMemo, useState } from "react";
import { Product } from "../components/Card";
import { api } from "../lib/api";
import ProductView from "./components/ProductView";
import { retrieveUserId } from "../lib/globals";
import NoItems from "../components/NoItems";
import Loading from "../components/Loading";



interface ApiResponse {
    product: Pick<Product, "id" | "value" | "name" | "released">,

    mediaProduct: [
            {
                fileName: string
            }
        ]
}





export default function WishList() {
        const [wishList, setWishList] = useState<ApiResponse[]>([])
        const [hasItems, setHasItems] = useState<boolean>(true)
        const [loader, setLoader] = useState<boolean>(false)

        const memo = useMemo(async ()=>{
                const url = new URLSearchParams(window.location.search)
                await api.get(`./wishList/${retrieveUserId()}`)
                .then(function (res){
                setWishList(res.data)
                })
                .catch(function(err){
                    setHasItems(false)                 
                })
                setLoader(true)
        }, [])

        if(hasItems){

            return(
             <>
             {!loader && <Loading/>}
             <div className="flex mt-16 justify-center items-center">
                     <div className='flex justify-center  gap-20'>
                         <LeftMenu/>
                         <div className="bg-white w-[50rem]  h-[30rem] overflow-scroll overflow-x-hidden" >
                         {
                          
                          wishList.map((e)=>{
                                 // @ts-ignore
                                 let { fileName } = e.product.mediaProduct[0]
     
                                 return(
                                    <div  key={e.product.name} className="shadow">
                                        <ProductView
                                        section=""
                                        released={e.product.released}
                                        coverUrl={fileName}
                                        name={e.product.name}
                                        value={e.product.value}
                                        id={e.product.id}
                                        />
                                    </div>
                                 )
                             })
                         }     
                         
                         </div>
                     </div>
             </div>
             </>
             )
        }else{
            return (
            <>
                <div className="flex mt-16 justify-center items-center">
                        <div className='flex justify-center  gap-20'>
                            <LeftMenu/>
                            <div className="bg-white w-[50rem]  flex items-center justify-center h-[30rem] overflow-scroll overflow-x-hidden" >
                                <NoItems iconId={1} text="em sua lista de desejos"/>
                            </div>
                    </div>
                </div>
            </>
            )
        }
}
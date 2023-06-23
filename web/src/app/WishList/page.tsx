"use client"
import LeftMenu from "../components/LeftMenu";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie"
import { useMemo, useState } from "react";
import { Product } from "../components/Card";
import { api } from "../lib/api";
import ProductView from "./components/ProductView";
import { retrieveUserId } from "../lib/globals";
import Title from "../components/Title";



interface ApiResponse {
    product: Pick<Product, "id" | "value" | "name">,

    mediaProduct: [
            {
                fileName: string
            }
        ]
}





export default function WishList() {
        const [wishList, setWishList] = useState<ApiResponse[]>([])
            
        const memo = useMemo(async ()=>{
                const url = new URLSearchParams(window.location.search)
                await api.get(`./wishList/${retrieveUserId()}`)
                .then(function (res){
                setWishList(res.data)
                })
        }, [])
  
    
        



       return(
        <>
        <Title/>
        <div className="flex mt-16 justify-center items-center">
                <div className='flex justify-center  gap-20'>
                    <LeftMenu/>
                    <div className="bg-white w-[50rem] relative " >
                    {
                        wishList.map((e)=>{
                            console.log(e)
                            // @ts-ignore
                            let { fileName } = e.product.mediaProduct[0]

                            return(
                                <ProductView
                                key={0}
                                coverUrl={fileName}
                                name={e.product.name}
                                value={e.product.value}
                                id={e.product.id}
                                />
                            )
                        })
                    }     
                    
                    </div>
                </div>
        </div>
        </>
        )
}
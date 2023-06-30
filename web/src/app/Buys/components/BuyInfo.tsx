"use client"
import NoItems from "@/app/components/NoItems"
import { api } from "@/app/lib/api"
import { retrieveUserId } from "@/app/lib/globals"
import { useMemo, useState } from "react"
import {BsFillBagCheckFill} from "react-icons/bs"

interface ApiBuysResponse{
    totalAmount: number,
    date: Date,
    BuyItens: [
        {
            product:{
                name: string
            }
        }
    ]
}


export default function BuyInfo() {

    const [buys, setBuys] = useState<ApiBuysResponse[] | null>(null)

    const memo = useMemo(async ()=>{
        await api.get(`/buys/${retrieveUserId()}`)
                .then((res) => setBuys(res.data))
            
    }, [])

    return(
        <> 
        {
            buys?.length ? ( 
                <table
                className="w-[100%] ml-2 ">
                    <th>Data</th>
                    <th>Total</th>
                    <th>Itens</th>
                    <th>Status</th>
                <tbody>
            {
                buys?.toSpliced(0, (buys.length - 5)).map((e, buyIndex)=>{
                    return(
                        <tr key={e.date.toString()}
                        className="items-center h-20 shadow"
                        >
                        <td className="text-center">
                            <p>{e.date.toString().split("T")[0]}</p>
                        </td>
                        <td className="text-center">
                            <p>R${e.totalAmount}</p>
                        </td>
                        <td className="text-center">
                            { e.BuyItens.map((itens, index) => {
                                    return(
                                        <div key={index + buyIndex}>
                                            <p>{itens.product.name}</p>
                                        
                                        </div>
                                    )
                            })}
                        </td>
                        <td className="flex justify-center items-center flex-col gap-2 mt-5">
                            
                                <BsFillBagCheckFill color="#33c033"
                                className="w-10 h-10"
                                />
                                <p className="text-[#33c033]">Aprovado</p>
                        </td>
                    </tr>
                    )
                
                })
            }
            </tbody>
            </table>
            ) 
            : (
                <div className="flex justify-center items-center w-[100%]">

                    <NoItems iconId={2} text="sua lista de compras"/>
                </div>
            )
        }
        </>
    )
};

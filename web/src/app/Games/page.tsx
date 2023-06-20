"use client"
import {useEffect, useState} from "react"
import { api } from "../lib/api"

interface Gender{
    desc: string
}

interface ProductInfo{
    id: string,
    name: string,
    value: number
    gender: Gender,

}
const getProductInfo = async ()=>{
    await api.get("/product")
}
export default function Games() {
    const [genders, setGenders] = useState<ProductInfo[]>([])

    useEffect(()=>{
        
    }, [])
    return(
            <div>
                <p>oi</p>
            </div>
    )
}
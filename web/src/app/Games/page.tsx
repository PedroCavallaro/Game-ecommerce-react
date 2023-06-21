"use client"
import {useEffect, useMemo, useState} from "react"
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
const getProductInfo = async () =>{
    const response = await api.get("/genders")
    
    const { data } = response
    return data
 }
export default function Games() {
 
    return(
        <div>
          
        </div>
       
    )
}
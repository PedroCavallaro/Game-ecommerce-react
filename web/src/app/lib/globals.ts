import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { api } from "./api"
import { Product } from "../components/Card"


interface Token{
    id: string
}

export function retrieveUserId(){
    if(Cookies.get("token")){
        const token: Token[] = jwtDecode(Cookies.get("token")!)
        const  id  = token[0]?.id as string
        return id
    }
    return ""
}

export async function SaveOnWishList(userId: string, productId: string) {
    await api.post("wishList", {
        userId,
        productId,

    })
}
export async function DeleteFromWishList(userId: string, productId: string) {
    await api.delete(`wishList`, {
        data:{
            userId,
            productId
        }
    })
}
export function AddToCart( product: Omit<Product, "desc" | "id" | "section">){
    let arrProducts: Product[]
    arrProducts = JSON.parse(localStorage.getItem("cart") || "{}")

    arrProducts.map((productSaved) =>{
            if(productSaved.name === product.name){
                productSaved.qtd += 1
            }
            
        })
        localStorage.setItem("cart", JSON.stringify(arrProducts))
}
export function SubtractFromCart(product:Omit<Product, "desc" | "id" | "section">){
    let arrProducts: Product[]
    arrProducts = JSON.parse(localStorage.getItem("cart") || "{}")   

    arrProducts.map((productSaved) =>{
            if(productSaved.name === product.name){
                productSaved.qtd -= 1
            }
        })
        localStorage.setItem("cart", JSON.stringify(arrProducts))
}
export  function RemoveFromCart(product:Omit<Product, "desc" | "id" | "section">){
    let arrProducts: Product[]
    let saveOnls: Product[] = []
    arrProducts = JSON.parse(localStorage.getItem("cart") || "{}")  

    saveOnls = arrProducts.filter((e)=> e.name !== product.name)

    localStorage.setItem("cart", JSON.stringify(saveOnls))
}



import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import { api } from "./api"


interface Token{
    id: string
}

export function retrieveUserId(){
    const token: Token[] = jwtDecode(Cookies.get("token")!)
    const   id  = token[0]?.id as string
    return id
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
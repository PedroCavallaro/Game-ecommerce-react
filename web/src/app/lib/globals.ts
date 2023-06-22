import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"


interface Token{
    id: string
}

export function retrieveUserId(){
    const token: Token[] = jwtDecode(Cookies.get("token")!)
    const   id  = token[0]?.id as string
    return id
}